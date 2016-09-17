//Class
function Human(name, gender, age, height, weight) {
    this.name = name || 'incognito';
    this.gender = gender || 'male';
    this.age = age || 18;
    this.height = height || 175;
    this.weight = weight || 75;
}

//Some silly CONSTANTS
Human.LEGS = 2;
Human.ARMS = 2;
Human.HEAD = 1;
Human.EAT = true;

//Method of every instance of this class
Human.prototype.info = function () {
    var string = 'Hi! I\'m ' + this.name + '(' + this.gender + ')' + ' and I\'m ' + this.age + ' years old. ';
    string += 'My height is ' + this.height + 'cm and my weight is ' + this.weight + 'kg. ';
    string += 'I have ' + Human.LEGS + ' legs, ' + Human.ARMS + ' arms and ' + Human.HEAD + ' head';
    console.log(string);
};

function Worker(name, gender, age, height, weight, company, salary) {
    Human.call(this, name, gender, age, height, weight);
    this.company = company || 'unemployed';
    this.salary = salary || 0;
}

Worker.prototype = new Human();
Worker.prototype.occupation = function () {
    Human.prototype.info.apply(this);
    console.log('I work in ' + this.company + ' and get ' + this.salary + '$ every month.');
};

function Student(name, gender, age, height, weight, college, scholarship, tvShow) {
    Human.call(this, name, gender, age, height, weight);
    this.college = college;
    this.scholarship = scholarship;
    this.tvShow = tvShow;
}

Student.prototype = new Human();
Student.prototype.occupation = function () {
    Human.prototype.info.apply(this);
    console.log('I study in ' + this.college + ', get ' + this.scholarship + '$ as a scholarship and I usually  watch "' + this.tvShow + '".');
};

var John = new Human('John', '', 25, 180, 77);
John.info();

var Jimmy = new Worker('Jimmy', '', '', '', 60, 'Google', 10000);
Jimmy.occupation();

var Ellis = new Student('Ellis', 'female', 17, 160, 50, 'college', 1000, 'Games of thrones');
Ellis.occupation();