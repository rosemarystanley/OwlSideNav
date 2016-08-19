/**
 * OwlSideNav Plugin
 * @version 1.0
 * @TODO Possibly add option for sizing of stage/navigation
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the sidenav plugin.
	 * @class The stage Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var OwlSideNav = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.sideNav && this._core.settings.nav) {
					this.sideNavigation();
				}
			}, this),
		};

		// set the default options
		this._core.options = $.extend({}, OwlSideNav.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	OwlSideNav.Defaults = {
		sideNav: false,
	};

/**
	 * Moves Navigation outside of owl-carousel element so we can position them on either side.
	 * Then add click listener to the new navigations.
	 * @public
	 */
	OwlSideNav.prototype.sideNavigation = function(e) {
		var $owl = this._core.$element,
        $options = this._core.options,
				navigation = $owl.find('.' + $options.navContainerClass),
        prev = navigation.find('.' + $options.navClass[0]),
        next = navigation.find('.' + $options.navClass[1]);

    // Remove existing navigation.
		navigation.remove();

    // Wrap the element.
    $owl.wrap('<div class="owl-wrapper owl-theme"></div>');

    // Add new navigation.
    prev.insertBefore($owl);
    next.insertAfter($owl);
    prev.wrap('<div class="' + $options.navContainerClass + '"></div>');
    next.wrap('<div class="' + $options.navContainerClass + '"></div>');


	  prev.click(function() { $owl.trigger('prev.owl.carousel'); });
    next.click(function() { $owl.trigger('next.owl.carousel'); });

	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	OwlSideNav.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.OwlSideNav = OwlSideNav;

})(window.Zepto || window.jQuery, window, document);
