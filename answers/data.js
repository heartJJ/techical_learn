let questions = [
  {
    text: '以下哪个市属于浙江?',
    answers: [ { key: 'A', val: '杭州' }, { key: 'B', val: '苏州' } ],
    right_index: 0
  }
];

localStorage.setItem('questions', JSON.stringify(questions));
localStorage.setItem('questions_already', JSON.stringify([]) );
