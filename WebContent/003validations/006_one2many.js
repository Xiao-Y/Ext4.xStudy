(function() {
	Ext.onReady(function() {

		// teacher 1 ==> n student
		// 老师Model
		Ext.regModel('teacher', {
			field : [ {
				name : 'teacherId',
				type : 'int'
			}, {
				name : 'name',
				type : 'aotu'
			} ],
			hasMany : {
				model : 'student',
				name : 'getStudent',
				filterProperty : 'teacher_id'
			}
		});

		// 学生Model
		Ext.regModel('student', {
			field : [ {
				name : 'studentId',
				type : 'int'
			}, {
				name : 'name',
				type : 'aotu'
			}, {
				name : 'teacher_id',
				type : 'int'
			} ]
		});
	});
})();
