App.CKEditor = Ember.TextArea.extend({

	elementId: 'html_editor',

	isVisible: false,

	editor: null,

	valueChange: function(){
		var self = this,
			elementId = this.get('elementId');

		if(this.get('editor')){
			if(!this.get('value')) this.get('editor').setData("");
			return;
		}

		this.set('editor', CKEDITOR.replace( elementId, {
			allowedContent: true,
			height: '410px',
			toolbar: [
				{ name: 'document', items: [ 'Source', '-', 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord' ] },	// Defines toolbar group with name (used to create voice label) and items in 3 subgroups.
				{ name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
				{ name: 'insert', items: [ 'Image', 'Table', 'HorizontalRule', 'SpecialChar' ] },
				{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ] },
				{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl' ] },
				{ name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
				{ name: 'colors', items : [ 'TextColor','BGColor' ] },
				{ name: 'tools', items: [ 'Maximize', 'ShowBlocks' ] }
			]
		}));

		this.get('editor').on('blur', function(e) {
			if (e.editor.checkDirty()) {
				self.set('value', self.get('editor').getData() );
			}
		});
		// Prevent drag-and-drop.
		this.get('editor').on('dialogShow', function (ev) {
			var dialog = ev.data;

			if ( dialog.getName() == 'image' ){
				dialog.dontResetSize = false;
				var imgUrl = dialog.getValueOf( 'info', 'txtUrl');
				if(imgUrl.indexOf("file/tmb")!=-1 && imgUrl.indexOf("?large=true")<0){
					imgUrl = imgUrl.substring(imgUrl.indexOf(App.DataAccess.getContextPath()));
					dialog.setValueOf( 'info', 'txtUrl', imgUrl+'?large=true' );

				}

			}

		});

	}.observes('value'),

	didInsertElement: function() {
		//this.set('value', " ");
		this.sendAction('action');
	},

	willDestroyElement: function(){
		CKEDITOR.instances[this.get('elementId')].destroy(true);
	}
	
});