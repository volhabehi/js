 /*var numbers = {
        0: 'Zero',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four'
    };

    function foo(a, b)
    {
        var numbers = {
            0: 'Zero',
            1: 'One',
            2: 'Two',
            3: 'Three',
            4: 'Four'
        };

        return numbers[a] + ' + ' + numbers[b] + ' = ' + numbers[a + b] ;
    }*/

    /*var people = {
        "name": 'Neo',
        "age": 24,
    };*/

    // console.log(numbers[foo()]);


    /*var people = {
        name: 'Neo',
        age: 24,
        1: 'One',
        "user name": 'Test',
        var: 'var'
    };

    console.log(people);*/



    /*var people = {username: 'Neo', age: 24};

    var zvezdiSoshlis = false;

    if(zvezdiSoshlis){
        people.appartment = 'Melnikaite';
    }

    console.log(people);*/

    /*var price = (function(){
        var discount = 10;
        var tax = 20;
        var order = 400;

        return order - discount + tax;
    })();*/
    
    /*function pow(n, exp)
    {
        if(exp){
            return n * pow(n, exp - 1);
        }else{
            return 1;
        }
    }

    console.log( pow(2, 3) );*/






    /*function pow(n, exp)
    {
        var result = 1;

        while(exp--){
            result *= n;
        }

        return result;
    }

    function pow(n, exp)
    {
        if(exp){
            return n * pow(n, exp - 1);
        }else{
            return 1;
        }
    }*/

    /*function foo(i) {
        if(i <= 20) {
            console.log(i);
            foo(i + 1);
        }
    }


    foo(17);*/



    /*function sayHello(greet)
    {
        return function (name){
            console.log(name + " " + greet);
        };
    }

    var en = sayHello('Hello');
    var ru = sayHello('Салют');
    var fr = sayHello('Bonjurno');*/






















    /*var foo = function () {
        var i = 0;

        return function () {
           console.log(i++);
        };
    }

    var x = foo();// function () { console.log(i++); };
    var y = foo();// function () { console.log(i++); };

    x();
    x();
    x();

    y();
    i = 1002;
    y();
    y();*/

    /*var username = 'Neo';

    function foo()
    {
        if(true){
            console.log(username);
        }else{
            var username = 'Tank';
            console.log(username);
        }
    }

    foo();*/
    /*function bar(call)
    {
        if(typeof call  == 'function')
            call();
        else{
            console.log(call);
        }
    }

    bar(function(){
        console.log('Hello Andrew');
    });*/


    /*function foo()
    {
        var a = b = c = 10;
    }

    console.log(foo());

    console.log(b);*/

    /*var x = 'global-x';
    var y = 'global-y';

    function inner()
    {
        var x = 'local-x';
        console.log(x);
        console.log(y);

        function inside(z)
        {
            console.log(x);
            console.log(y);
            console.log(z);
            y = 'inside-y';
        }

        inside('local-z');
    }

    inner();
    console.log(x);
    console.log(y);
*/



















  /*function ending(cnt)
  {
      var lastNumber = cnt % 10;
      var lastTwoNumber = cnt % 100;

      if(lastTwoNumber < 11 || lastTwoNumber > 14) {
          switch (lastNumber) {
              case 1:
                  return '';
              case 2:
              case 3:
              case 4:
                  return 'а';
              default :
                  return 'ов';
          }
      }

      return 'ов';
  }

  var str;

  for(var cnt = 0; cnt <= 10000; cnt++){
      str = 'У вас в корзине ' + cnt + ' товар' + ending(cnt);

      console.log(str);
  }*/

















    /*function abs(num)
    {
        if(num < 0){
            return -num;
        }

        return num;
    }

    abs(-3);*/








    /*function foo(name, ending)
    {
        return 'Hello ' + name;
        name = name || 'Guest2';

        if(typeof ending == 'number'){
            ending++;
        }

        console.log('Hello ' + name + ending);
    }

    var str = foo('Neo', '!!!!'); // name = 'Neo'
    str = parseInt('12px');
    console.log(str);
    var n = 'Tank';
    foo(n, 1); // name = n

    foo(); // name;*/
