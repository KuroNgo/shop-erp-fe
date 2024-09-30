export const data = {
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10]
      }
    ]
  }
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000, // Thời gian animation, tính bằng ms (2000ms = 2 giây)
      easing: 'easeInOutCubic', // Hiệu ứng animation, có nhiều kiểu như 'linear', 'easeInQuad', 'easeOutBounce', v.v.
    },
  }
  