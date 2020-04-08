$(function() {
  
  const questions = JSON.parse(localStorage.getItem('questions') ),
    questions_already = JSON.parse(localStorage.getItem('questions_already'))
  
  let index;

  const random = function() {
    if (questions_already.length === questions.length) {
      alert('所有题目均已被回答');
    }

    do {
      index = 0;
    } while (questions_already.includes(index));  

    $('#div1').text(`${questions[index].text}`);
    $('#td1').text(`${questions[index].answers[0].key}: ${questions[index].answers[0].val}`);
    $('#td2').text(`${questions[index].answers[1].key}: ${questions[index].answers[1].val}`);

    questions_already.push(index);
  }
  
  random();

  $('#button1').click(function() {
    $('#div2').append(`<p><font color='red'>${questions[index].answers[questions[index].right_index].key}: ${questions[index].answers[questions[index].right_index].val}</font></p>`);
  })


});
