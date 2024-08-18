import React, {useEffect, useRef, useContext } from 'react';
import { HomepageContext } from '../../context/context';
import { createNoise3D } from 'simplex-noise';
import * as dat from 'dat.gui';


export const Waveform = props => {
    const canvasRef = useRef(null);
    const { isSparkle } = useContext(HomepageContext)
    useEffect(() => {

/**
 * requestAnimationFrame
 */
window.requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
})();


// Configs

var Configs = {
    backgroundColor: '#eee9e9',
    particleNum: 1000,
    step: 5,
    base: 1000,
    zInc: 0.001
};


// Vars

var canvas,
    context,
    screenWidth,
    screenHeight,
    particles = [],
    simplexNoise,
    zoff = 0,
    gui;


// Initialize

function init() {
    canvas = canvasRef.current;

    window.addEventListener('resize', onWindowResize, false);
    onWindowResize(null);

    for (var i = 0, len = Configs.particleNum; i < len; i++) {
        initParticle((particles[i] = new Particle()));
    }

    simplexNoise = new createNoise3D();

    update();
}


// Event listeners

function onWindowResize(e) {
    screenWidth  = canvas.width  = window.innerWidth;
    screenHeight = canvas.height = window.innerHeight;


    context = canvas.getContext('2d');
    context.lineWidth = 0.3;
    context.lineCap = context.lineJoin = 'round';
}


// Functions

function getNoise(x, y, z) {
    var octaves = 4,
        fallout = 0.5,
        amp = 1, f = 1, sum = 0,
        i;

    for (i = 0; i < octaves; ++i) {
        amp *= fallout;
        sum += amp * (simplexNoise(x * f, y * f, z * f) + 1) * 0.5;
        f *= 2;
    }

    return sum;
}

function initParticle(p) {
    p.x = p.pastX = screenWidth * Math.random();
    p.y = p.pastY = screenHeight * Math.random();
    p.color.h = Math.random() * (250 - 200) + 250;
    p.color.s = 0;
    p.color.l = (Math.random() * (3.5 - 0) + 3) / 10;
    p.color.a = 0;
}


// Update

function update() {
    var step = Configs.step,
        base = Configs.base,
        i, p, angle,
        len = particles.length;
    
    for (i = 0, len; i < len; i++) {
        p = particles[i];

        p.pastX = p.x;
        p.pastY = p.y;
    
        angle = Math.PI * 6 * getNoise(p.x / base * 1.75, p.y / base * 1.75, zoff);
        p.x += Math.cos(angle) * step;
        p.y += Math.sin(angle) * step;
        
        if (p.color.a < 1) p.color.a += 0.003;

        context.beginPath();
        context.strokeStyle = p.color.toString();
        context.moveTo(p.pastX, p.pastY);
        context.lineTo(p.x, p.y);
        context.stroke();
        
        if (p.x < 0 || p.x > screenWidth || p.y < 0 || p.y > screenHeight) {
            initParticle(p);
        }
    }
    
    zoff += Configs.zInc;

    requestAnimationFrame(update);
}


/**
 * HSLA
 */
function HSLA(h, s, l, a) {
    this.h = h || 0;
    this.s = s || 0;
    this.l = l || 0;
    this.a = a || 0;
}

HSLA.prototype.toString = function() {
    return 'hsla(' + this.h + ',' + (this.s * 100) + '%,' + (this.l * 100) + '%,' + this.a + ')';
}

/**
 * Particle
 */
function Particle(x, y, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.color = color || new HSLA();
    this.pastX = this.x;
    this.pastY = this.y;
}


// Run

init();

    }, [canvasRef]);

    return (
        <>
        <div className={isSparkle ? 's' : 'hidden'}>
            <canvas ref={canvasRef} {...props}/>
        </div>
        </>
       
    );
};
