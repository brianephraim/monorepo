// remembering a smelly code pattern I had to contend with in the past


angular.module('someModule').factory('someService', someService);

someService.$inject = ['someDep1','someDep2','someDep3'];
function someService(someDep1, someDep2, someDep3) {
  return {
    someFun1: someFun1.bind(null, someDep1, someDep2, someDep3)
  };
}

function someFun1(someDep1, someDep2, someDep3, someArgument) {
  return someDep1(someArgument).then((result) => {
    return result === someDep2.someProp || result === someDep3.someProp
  });
}