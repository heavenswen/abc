//可编辑表格  id jquery.datatable(),select option ,function
var table_edit = function(strobj, table, options, fun) {
	var tab = ("ontouchend" in document) ? "click" : "dblclick";
	var me = this;
	//set
	$(strobj).on(tab, '.set', editor_input);
	//对应数据选择框
	var $td = ''; //当前对象
	function editor_input(e) {
		//生成select
		if($(this).hasClass("set_select")) {
			var htm = '';
			for(key in options) {
				htm += "<option>" + options[key] + "</option>";
			}
			$(this).html("<select>" + htm + "</select>");
			$(this).children('select').on("blur change", editor_blur);

		} else {
			var value = table.cell(this).data() || '';
			var htm = "<input class=\"form-control\" type='text' value='" + value + "' />";
			//选择类型
			if($(this).hasClass("set_date")) {
				input_date($(this), value); //调用时间
			} else if($(this).hasClass("set_number")) {
				htm = "<input class=\"form-control\" type='number' value='" + value + "' />";
				$(this).html(htm);
			} else {
				$(this).html(htm);
			}
			//日期选择器
			if($(this).hasClass("set_date") && $.fn.datetimepicker) {
				$(this).children('input').focus().select().datetimepicker().on("changeDate blur", editor_blur);
			} else {
				$(this).children('input').focus().select().on("blur change", editor_blur);
			}

		}
		$td = $(this); //获取选中的对象
		e.stopPropagation();
	}

	//数据修改
	function editor_blur() {
		var value = $(this).val();
		$(this).off("blur change", editor_blur);
		if($.fn.datetimepicker) $(this).datetimepicker().off("changeDate");
		table.cell($td).data(value); //修改
		$td.text(value);
		//回调外部执行的事件
		if(fun) {
			//绑定事件 修改结束时触发
			$td.on("dataTable_edit", fun);
			$td.triggerHandler("dataTable_edit");
		} //fun($td); 
	}

	var input_date = function($o, value) {
		value = value ? value : '';
		if(!("ontouchend" in document) && $.fn.datetimepicker) {
			var htm = "<input type='text' class='date form-control' value = '" + value + "' />";
			$o.html(htm);

			$o.find("input").datetimepicker({
				language: "zh-CN",
				weekStart: 1,
				todayBtn: 1,
				autoclose: 1,
				todayHighlight: 1,
				startView: 2,
				minView: 2,
				forceParse: 0,
				format: "yyyy-mm-dd",
				pickerPosition: 'bottom-left'
			});
		} else {
			var htm = "<input type='date' class='date' value = '" + value + "' />";
			$o.html(htm);
		}
	}

	//添加一个空列
	$(".table_add").on("click", function() {
		table.row.add({}).draw();
	})

	//添加带序号的行
	$(".table_row").on("click", function() {
			var n = $(strobj + ' tbody tr').size();
			table.row.add({
				no: (n + 1)
			}).draw();
		})
		//多项项删除  --当固定列时不能选择固定的列进行删除
	$(".table_del").on("click", function() {
		var $checker = $("#table input[type='checkbox']:checked");
		var obj = $("#table input[type='checkbox']:checked").parents('tr');

		if(obj.size()) {
			table.rows(obj).remove().draw();
		}
	})

}