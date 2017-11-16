'use strict';
module.exports = function(app){
  var emp = require('../controller/vsoftAssistantController');

  //empList Routes
  app.route('/branch')
    .get(emp.get_branch)
    .post(emp.get_branchname)

  // app.route('/employee/:empName')
  //   .get(empList.get_emp_age)
    // .put(empList.updtae_emp_age)
    // .delete(empList.delete_emp)
    // .get(empList.get_join_date)
}
