export const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Data One',
        backgroundColor: '#9BD0F5',
        borderColor: '#36A2EB',
        data: [40, 39, 10, 40, 39, 80, 40],
        tension: 0.4, // Giá trị tension để tạo đường cong
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
  