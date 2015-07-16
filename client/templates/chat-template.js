Template.appChat.helpers({

	messages : function ()
	{
		return Messages.find({},{sort: {createdAt: -1}, limit: 10})
	}
});



Template.appChat.events({

	"click .btnDelete": function (event)
	{
		Messages.remove(this._id);
		return false; 
	},
	"keyup .txtGender": function (event){

		if (event.keyCode == 13) {
			Messages.insert({
				name: $(".txtName").val(),
				age: $(".txtAge").val(),
				address: $(".txtAddress").val(),
				course: $(".txtCourse").val(),
				gender: $(".txtGender").val(),
				createdAt: new Date()

			});
				name: $(".txtName").val("");
				age: $(".txtAge").val("");
				address: $(".txtAddress").val("");
				course: $(".txtCourse").val("");
			//text: $(".txtText").val("");
			//text: $(".txtText").focus();
		}

		return false;
	}
});