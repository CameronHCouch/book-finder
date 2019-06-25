import React from 'react';

// loading icon c/o loading.io
function Loading() {
  return(
    <svg className='lds-blocks' width='200px'  height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'><rect x='24.5' y='24.5' width='15' height='15' fill='#82bbe4'>
      <animate attributeName='fill' values='#a3d9ef;#82bbe4;#82bbe4' keyTimes='0;0.125;1' dur='0.9s' repeatCount='indefinite' begin='0s' calcMode='discrete'></animate>
    </rect><rect x='42.5' y='24.5' width='15' height='15' fill='#82bbe4'>
      <animate attributeName='fill' values='#a3d9ef;#82bbe4;#82bbe4' keyTimes='0;0.125;1' dur='0.9s' repeatCount='indefinite' begin='0.1125s' calcMode='discrete'></animate>
    </rect><rect x='60.5' y='24.5' width='15' height='15' fill='#82bbe4'>
      <animate attributeName='fill' values='#a3d9ef;#82bbe4;#82bbe4' keyTimes='0;0.125;1' dur='0.9s' repeatCount='indefinite' begin='0.225s' calcMode='discrete'></animate>
    </rect><rect x='24.5' y='42.5' width='15' height='15' fill='#82bbe4'>
      <animate attributeName='fill' values='#a3d9ef;#82bbe4;#82bbe4' keyTimes='0;0.125;1' dur='0.9s' repeatCount='indefinite' begin='0.7875s' calcMode='discrete'></animate>
    </rect><rect x='60.5' y='42.5' width='15' height='15' fill='#82bbe4'>
      <animate attributeName='fill' values='#a3d9ef;#82bbe4;#82bbe4' keyTimes='0;0.125;1' dur='0.9s' repeatCount='indefinite' begin='0.3375s' calcMode='discrete'></animate>
    </rect><rect x='24.5' y='60.5' width='15' height='15' fill='#82bbe4'>
      <animate attributeName='fill' values='#a3d9ef;#82bbe4;#82bbe4' keyTimes='0;0.125;1' dur='0.9s' repeatCount='indefinite' begin='0.675s' calcMode='discrete'></animate>
    </rect><rect x='42.5' y='60.5' width='15' height='15' fill='#82bbe4'>
      <animate attributeName='fill' values='#a3d9ef;#82bbe4;#82bbe4' keyTimes='0;0.125;1' dur='0.9s' repeatCount='indefinite' begin='0.5625s' calcMode='discrete'></animate>
    </rect><rect x='60.5' y='60.5' width='15' height='15' fill='#82bbe4'>
      <animate attributeName='fill' values='#a3d9ef;#82bbe4;#82bbe4' keyTimes='0;0.125;1' dur='0.9s' repeatCount='indefinite' begin='0.45s' calcMode='discrete'></animate>
    </rect>
    </svg>
  )
}

export default Loading;