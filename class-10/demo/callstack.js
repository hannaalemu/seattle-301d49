'use strict';

function instructor3() {
  console.error('Intructor, 3');
}

function assistant2() {
  instructor3();
  console.log('Im a assistant, 2')
}

function student1() {
  assistant2();
}

student1();