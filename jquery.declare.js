/**
 * jQuery Declare Plugin
 * Provides support for namespacing objects
 *
 * Inspired by https://github.com/acatl/jquery.declare
 * @author Ryan Bales
 * @date 2012-05-20
 */


(function($) {
	var 
		namespace_separator = /\./,
		root = this;

	$.extend({

		declare: function(name, obj) {
			namespace_members = name.split(namespace_separator);
			current_namespace = root;

			$.each(namespace_members, function(i,member) {
				current_namespace[member] = current_namespace[member] || {};
				current_namespace = current_namespace[member];
				if (i === (namespace_members.length - 1)) {
					$.extend(current_namespace, obj);
				}
			});
		}
	});

})(jQuery);
