/* Icon Picker */

(function($) {

	$.fn.iconPicker = function( options ) {
		var options = ['fa','fa']; // default font set
		var icons;
		$list = $('');
		function font_set() {
			if (options[0] == 'dashicons') {
				icons = [
					"blank",	// there is no "blank" but we need the option
					"menu",
					"admin-site",
					"dashboard",
					"admin-media",
					"admin-page",
					"admin-comments",
					"admin-appearance",
					"admin-plugins",
					"admin-users",
					"admin-tools",
					"admin-settings",
					"admin-network",
					"admin-generic",
					"admin-home",
					"admin-collapse",
					"admin-links",
					"format-links",
					"admin-post",
					"format-standard",
					"format-image",
					"format-gallery",
					"format-audio",
					"format-video",
					"format-chat",
					"format-status",
					"format-aside",
					"format-quote",
					"welcome-write-blog",
					"welcome-edit-page",
					"welcome-add-page",
					"welcome-view-site",
					"welcome-widgets-menus",
					"welcome-comments",
					"welcome-learn-more",
					"image-crop",
					"image-rotate-left",
					"image-rotate-right",
					"image-flip-vertical",
					"image-flip-horizontal",
					"undo",
					"redo",
					"editor-bold",
					"editor-italic",
					"editor-ul",
					"editor-ol",
					"editor-quote",
					"editor-alignleft",
					"editor-aligncenter",
					"editor-alignright",
					"editor-insertmore",
					"editor-spellcheck",
					"editor-distractionfree",
					"editor-kitchensink",
					"editor-underline",
					"editor-justify",
					"editor-textcolor",
					"editor-paste-word",
					"editor-paste-text",
					"editor-removeformatting",
					"editor-video",
					"editor-customchar",
					"editor-outdent",
					"editor-indent",
					"editor-help",
					"editor-strikethrough",
					"editor-unlink",
					"editor-rtl",
					"align-left",
					"align-right",
					"align-center",
					"align-none",
					"lock",
					"calendar",
					"visibility",
					"post-status",
					"post-trash",
					"edit",
					"trash",
					"arrow-up",
					"arrow-down",
					"arrow-left",
					"arrow-right",
					"arrow-up-alt",
					"arrow-down-alt",
					"arrow-left-alt",
					"arrow-right-alt",
					"arrow-up-alt2",
					"arrow-down-alt2",
					"arrow-left-alt2",
					"arrow-right-alt2",
					"leftright",
					"sort",
					"list-view",
					"exerpt-view",
					"share",
					"share1",
					"twitter",
					"rss",
					"facebook",
					"facebook-alt",
					"networking",
					"googleplus",
					"hammer",
					"art",
					"migrate",
					"performance",
					"wordpress",
					"wordpress-alt",
					"pressthis",
					"update",
					"screenoptions",
					"info",
					"cart",
					"feedback",
					"cloud",
					"translation",
					"tag",
					"category",
					"yes",
					"no",
					"no-alt",
					"plus",
					"minus",
					"dismiss",
					"marker",
					"star-filled",
					"star-half",
					"star-empty",
					"flag",
					"location",
					"location-alt",
					"camera",
					"images-alt",
					"images-alt2",
					"video-alt",
					"video-alt2",
					"video-alt3",
					"vault",
					"shield",
					"shield-alt",
					"search",
					"slides",
					"analytics",
					"chart-pie",
					"chart-bar",
					"chart-line",
					"chart-area",
					"groups",
					"businessman",
					"id",
					"id-alt",
					"products",
					"awards",
					"forms",
					"portfolio",
					"book",
					"book-alt",
					"download",
					"upload",
					"backup",
					"lightbulb",
					"smiley"
				]; 
				options[1] = 'dashicons';
			} else if (options[0] == 'fa') {
			icons = [
                "blank",
                "500px",
                "address-book",
                "address-book-o",
                "address-card",
                "address-card-o",
                "adjust",
                "adn",
                "align-center",
                "align-justify",
                "align-left",
                "align-right",
                "amazon",
                "ambulance",
                "american-sign-language-interpreting",
                "anchor",
                "android",
                "angellist",
                "angle-double-down",
                "angle-double-left",
                "angle-double-right",
                "angle-double-up",
                "angle-down",
                "angle-left",
                "angle-right",
                "angle-up",
                "apple",
                "archive",
                "area-chart",
                "arrow-circle-down",
                "arrow-circle-left",
                "arrow-circle-o-down",
                "arrow-circle-o-left",
                "arrow-circle-o-right",
                "arrow-circle-o-up",
                "arrow-circle-right",
                "arrow-circle-up",
                "arrow-down",
                "arrow-left",
                "arrow-right",
                "arrow-up",
                "arrows",
                "arrows-alt",
                "arrows-h",
                "arrows-v",
                "asl-interpreting",
                "assistive-listening-systems",
                "asterisk",
                "at",
                "audio-description",
                "automobile",
                "backward",
                "balance-scale",
                "ban",
                "bandcamp",
                "bank",
                "bar-chart",
                "bar-chart-o",
                "barcode",
                "bars",
                "bath",
                "bathtub",
                "battery",
                "battery-0",
                "battery-1",
                "battery-2",
                "battery-3",
                "battery-4",
                "battery-empty",
                "battery-full",
                "battery-half",
                "battery-quarter",
                "battery-three-quarters",
                "bed",
                "beer",
                "behance",
                "behance-square",
                "bell",
                "bell-o",
                "bell-slash",
                "bell-slash-o",
                "bicycle",
                "binoculars",
                "birthday-cake",
                "bitbucket",
                "bitbucket-square",
                "bitcoin",
                "black-tie",
                "blind",
                "bluetooth",
                "bluetooth-b",
                "bold",
                "bolt",
                "bomb",
                "book",
                "bookmark",
                "bookmark-o",
                "braille",
                "briefcase",
                "btc",
                "bug",
                "building",
                "building-o",
                "bullhorn",
                "bullseye",
                "bus",
                "buysellads",
                "cab",
                "calculator",
                "calendar",
                "calendar-check-o",
                "calendar-minus-o",
                "calendar-o",
                "calendar-plus-o",
                "calendar-times-o",
                "camera",
                "camera-retro",
                "car",
                "caret-down",
                "caret-left",
                "caret-right",
                "caret-square-o-down",
                "caret-square-o-left",
                "caret-square-o-right",
                "caret-square-o-up",
                "caret-up",
                "cart-arrow-down",
                "cart-plus",
                "cc",
                "cc-amex",
                "cc-diners-club",
                "cc-discover",
                "cc-jcb",
                "cc-mastercard",
                "cc-paypal",
                "cc-stripe",
                "cc-visa",
                "certificate",
                "chain",
                "chain-broken",
                "check",
                "check-circle",
                "check-circle-o",
                "check-square",
                "check-square-o",
                "chevron-circle-down",
                "chevron-circle-left",
                "chevron-circle-right",
                "chevron-circle-up",
                "chevron-down",
                "chevron-left",
                "chevron-right",
                "chevron-up",
                "child",
                "chrome",
                "circle",
                "circle-o",
                "circle-o-notch",
                "circle-thin",
                "clipboard",
                "clock-o",
                "clone",
                "close",
                "cloud",
                "cloud-download",
                "cloud-upload",
                "cny",
                "code",
                "code-fork",
                "codepen",
                "codiepie",
                "coffee",
                "cog",
                "cogs",
                "columns",
                "comment",
                "comment-o",
                "commenting",
                "commenting-o",
                "comments",
                "comments-o",
                "compass",
                "compress",
                "connectdevelop",
                "contao",
                "copy",
                "copyright",
                "creative-commons",
                "credit-card",
                "credit-card-alt",
                "crop",
                "crosshairs",
                "css3",
                "cube",
                "cubes",
                "cut",
                "cutlery",
                "dashboard",
                "dashcube",
                "database",
                "deaf",
                "deafness",
                "dedent",
                "delicious",
                "desktop",
                "deviantart",
                "diamond",
                "digg",
                "dollar",
                "dot-circle-o",
                "download",
                "dribbble",
                "drivers-license",
                "drivers-license-o",
                "dropbox",
                "drupal",
                "edge",
                "edit",
                "eercast",
                "eject",
                "ellipsis-h",
                "ellipsis-v",
                "empire",
                "envelope",
                "envelope-o",
                "envelope-open",
                "envelope-open-o",
                "envelope-square",
                "envira",
                "eraser",
                "etsy",
                "eur",
                "euro",
                "exchange",
                "exclamation",
                "exclamation-circle",
                "exclamation-triangle",
                "expand",
                "expeditedssl",
                "external-link",
                "external-link-square",
                "eye",
                "eye-slash",
                "eyedropper",
                "fa",
                "facebook",
                "facebook-f",
                "facebook-official",
                "facebook-square",
                "fast-backward",
                "fast-forward",
                "fax",
                "feed",
                "female",
                "fighter-jet",
                "file",
                "file-archive-o",
                "file-audio-o",
                "file-code-o",
                "file-excel-o",
                "file-image-o",
                "file-movie-o",
                "file-o",
                "file-pdf-o",
                "file-photo-o",
                "file-picture-o",
                "file-powerpoint-o",
                "file-sound-o",
                "file-text",
                "file-text-o",
                "file-video-o",
                "file-word-o",
                "file-zip-o",
                "files-o",
                "film",
                "filter",
                "fire",
                "fire-extinguisher",
                "firefox",
                "first-order",
                "flag",
                "flag-checkered",
                "flag-o",
                "flash",
                "flask",
                "flickr",
                "floppy-o",
                "folder",
                "folder-o",
                "folder-open",
                "folder-open-o",
                "font",
                "font-awesome",
                "fonticons",
                "fort-awesome",
                "forumbee",
                "forward",
                "foursquare",
                "free-code-camp",
                "frown-o",
                "futbol-o",
                "gamepad",
                "gavel",
                "gbp",
                "ge",
                "gear",
                "gears",
                "genderless",
                "get-pocket",
                "gg",
                "gg-circle",
                "gift",
                "git",
                "git-square",
                "github",
                "github-alt",
                "github-square",
                "gitlab",
                "gittip",
                "glass",
                "glide",
                "glide-g",
                "globe",
                "google",
                "google-plus",
                "google-plus-circle",
                "google-plus-official",
                "google-plus-square",
                "google-wallet",
                "graduation-cap",
                "gratipay",
                "grav",
                "group",
                "h-square",
                "hacker-news",
                "hand-grab-o",
                "hand-lizard-o",
                "hand-o-down",
                "hand-o-left",
                "hand-o-right",
                "hand-o-up",
                "hand-paper-o",
                "hand-peace-o",
                "hand-pointer-o",
                "hand-rock-o",
                "hand-scissors-o",
                "hand-spock-o",
                "hand-stop-o",
                "handshake-o",
                "hard-of-hearing",
                "hashtag",
                "hdd-o",
                "header",
                "headphones",
                "heart",
                "heart-o",
                "heartbeat",
                "history",
                "home",
                "hospital-o",
                "hotel",
                "hourglass",
                "hourglass-1",
                "hourglass-2",
                "hourglass-3",
                "hourglass-end",
                "hourglass-half",
                "hourglass-o",
                "hourglass-start",
                "houzz",
                "html5",
                "i-cursor",
                "id-badge",
                "id-card",
                "id-card-o",
                "ils",
                "image",
                "imdb",
                "inbox",
                "indent",
                "industry",
                "info",
                "info-circle",
                "inr",
                "instagram",
                "institution",
                "internet-explorer",
                "intersex",
                "ioxhost",
                "italic",
                "joomla",
                "jpy",
                "jsfiddle",
                "key",
                "keyboard-o",
                "krw",
                "language",
                "laptop",
                "lastfm",
                "lastfm-square",
                "leaf",
                "leanpub",
                "legal",
                "lemon-o",
                "level-down",
                "level-up",
                "life-bouy",
                "life-buoy",
                "life-ring",
                "life-saver",
                "lightbulb-o",
                "line-chart",
                "link",
                "linkedin",
                "linkedin-square",
                "linode",
                "linux",
                "list",
                "list-alt",
                "list-ol",
                "list-ul",
                "location-arrow",
                "lock",
                "long-arrow-down",
                "long-arrow-left",
                "long-arrow-right",
                "long-arrow-up",
                "low-vision",
                "magic",
                "magnet",
                "mail-forward",
                "mail-reply",
                "mail-reply-all",
                "male",
                "map",
                "map-marker",
                "map-o",
                "map-pin",
                "map-signs",
                "mars",
                "mars-double",
                "mars-stroke",
                "mars-stroke-h",
                "mars-stroke-v",
                "maxcdn",
                "meanpath",
                "medium",
                "medkit",
                "meetup",
                "meh-o",
                "mercury",
                "microchip",
                "microphone",
                "microphone-slash",
                "minus",
                "minus-circle",
                "minus-square",
                "minus-square-o",
                "mixcloud",
                "mobile",
                "mobile-phone",
                "modx",
                "money",
                "moon-o",
                "mortar-board",
                "motorcycle",
                "mouse-pointer",
                "music",
                "navicon",
                "neuter",
                "newspaper-o",
                "object-group",
                "object-ungroup",
                "odnoklassniki",
                "odnoklassniki-square",
                "opencart",
                "openid",
                "opera",
                "optin-monster",
                "outdent",
                "pagelines",
                "paint-brush",
                "paper-plane",
                "paper-plane-o",
                "paperclip",
                "paragraph",
                "paste",
                "pause",
                "pause-circle",
                "pause-circle-o",
                "paw",
                "paypal",
                "pencil",
                "pencil-square",
                "pencil-square-o",
                "percent",
                "phone",
                "phone-square",
                "photo",
                "picture-o",
                "pie-chart",
                "pied-piper",
                "pied-piper-alt",
                "pied-piper-pp",
                "pinterest",
                "pinterest-p",
                "pinterest-square",
                "plane",
                "play",
                "play-circle",
                "play-circle-o",
                "plug",
                "plus",
                "plus-circle",
                "plus-square",
                "plus-square-o",
                "podcast",
                "power-off",
                "print",
                "product-hunt",
                "puzzle-piece",
                "qq",
                "qrcode",
                "question",
                "question-circle",
                "question-circle-o",
                "quora",
                "quote-left",
                "quote-right",
                "ra",
                "random",
                "ravelry",
                "rebel",
                "recycle",
                "reddit",
                "reddit-alien",
                "reddit-square",
                "refresh",
                "registered",
                "remove",
                "renren",
                "reorder",
                "repeat",
                "reply",
                "reply-all",
                "resistance",
                "retweet",
                "rmb",
                "road",
                "rocket",
                "rotate-left",
                "rotate-right",
                "rouble",
                "rss",
                "rss-square",
                "rub",
                "ruble",
                "rupee",
                "s15",
                "safari",
                "save",
                "scissors",
                "scribd",
                "search",
                "search-minus",
                "search-plus",
                "sellsy",
                "send",
                "send-o",
                "server",
                "share",
                "share-alt",
                "share-alt-square",
                "share-square",
                "share-square-o",
                "shekel",
                "sheqel",
                "shield",
                "ship",
                "shirtsinbulk",
                "shopping-bag",
                "shopping-basket",
                "shopping-cart",
                "shower",
                "sign-in",
                "sign-language",
                "sign-out",
                "signal",
                "signing",
                "simplybuilt",
                "sitemap",
                "skyatlas",
                "skype",
                "slack",
                "sliders",
                "slideshare",
                "smile-o",
                "snapchat",
                "snapchat-ghost",
                "snapchat-square",
                "snowflake-o",
                "soccer-ball-o",
                "sort",
                "sort-alpha-asc",
                "sort-alpha-desc",
                "sort-amount-asc",
                "sort-amount-desc",
                "sort-asc",
                "sort-desc",
                "sort-down",
                "sort-numeric-asc",
                "sort-numeric-desc",
                "sort-up",
                "soundcloud",
                "space-shuttle",
                "spinner",
                "spoon",
                "spotify",
                "square",
                "square-o",
                "stack-exchange",
                "stack-overflow",
                "star",
                "star-half",
                "star-half-empty",
                "star-half-full",
                "star-half-o",
                "star-o",
                "steam",
                "steam-square",
                "step-backward",
                "step-forward",
                "stethoscope",
                "sticky-note",
                "sticky-note-o",
                "stop",
                "stop-circle",
                "stop-circle-o",
                "street-view",
                "strikethrough",
                "stumbleupon",
                "stumbleupon-circle",
                "subscript",
                "subway",
                "suitcase",
                "sun-o",
                "superpowers",
                "superscript",
                "support",
                "table",
                "tablet",
                "tachometer",
                "tag",
                "tags",
                "tasks",
                "taxi",
                "telegram",
                "television",
                "tencent-weibo",
                "terminal",
                "text-height",
                "text-width",
                "th",
                "th-large",
                "th-list",
                "themeisle",
                "thermometer",
                "thermometer-0",
                "thermometer-1",
                "thermometer-2",
                "thermometer-3",
                "thermometer-4",
                "thermometer-empty",
                "thermometer-full",
                "thermometer-half",
                "thermometer-quarter",
                "thermometer-three-quarters",
                "thumb-tack",
                "thumbs-down",
                "thumbs-o-down",
                "thumbs-o-up",
                "thumbs-up",
                "ticket",
                "times",
                "times-circle",
                "times-circle-o",
                "times-rectangle",
                "times-rectangle-o",
                "tint",
                "toggle-down",
                "toggle-left",
                "toggle-off",
                "toggle-on",
                "toggle-right",
                "toggle-up",
                "trademark",
                "train",
                "transgender",
                "transgender-alt",
                "trash",
                "trash-o",
                "tree",
                "trello",
                "tripadvisor",
                "trophy",
                "truck",
                "try",
                "tty",
                "tumblr",
                "tumblr-square",
                "turkish-lira",
                "tv",
                "twitch",
                "twitter",
                "twitter-square",
                "umbrella",
                "underline",
                "undo",
                "universal-access",
                "university",
                "unlink",
                "unlock",
                "unlock-alt",
                "unsorted",
                "upload",
                "usb",
                "usd",
                "user",
                "user-circle",
                "user-circle-o",
                "user-md",
                "user-o",
                "user-plus",
                "user-secret",
                "user-times",
                "users",
                "vcard",
                "vcard-o",
                "venus",
                "venus-double",
                "venus-mars",
                "viacoin",
                "viadeo",
                "viadeo-square",
                "video-camera",
                "vimeo",
                "vimeo-square",
                "vine",
                "vk",
                "volume-control-phone",
                "volume-down",
                "volume-off",
                "volume-up",
                "warning",
                "wechat",
                "weibo",
                "weixin",
                "whatsapp",
                "wheelchair",
                "wheelchair-alt",
                "wifi",
                "wikipedia-w",
                "window-close",
                "window-close-o",
                "window-maximize",
                "window-minimize",
                "window-restore",
                "windows",
                "won",
                "wordpress",
                "wpbeginner",
                "wpexplorer",
                "wpforms",
                "wrench",
                "xing",
                "xing-square",
                "y-combinator",
                "y-combinator-square",
                "yahoo",
                "yc",
                "yc-square",
                "yelp",
                "yen",
                "yoast",
                "youtube",
                "youtube-play",
                "youtube-square"
            ];
			options[1] = "fa";
		} else {
			icons = [
				"blank",
				"standard",
				"aside",
				"image",
				"gallery",
				"video",
				"status",
				"quote",
				"link",
				"chat",
				"audio",
				/* Social icons */
				"github",
				"dribbble",
				"twitter",
				"facebook",
				"facebook-alt",
				"wordpress",
				"googleplus",
				"linkedin",
				"linkedin-alt",
				"pinterest",
				"pinterest-alt",
				"flickr",
				"vimeo",
				"youtube",
				"tumblr",
				"instagram",
				"polldaddy",
				"googleplus-alt",
				"path",
				"skype",
				"pocket",

				/* Meta icons */
				"comment",
				"category",
				"tag",
				"time",
				"user",
				"day",
				"week",
				"month",
				"pinned",

				/* Other icons */
				"search",
				"unzoom",
				"zoom",
				"show",
				"hide",
				"close",
				"close-alt",
				"trash",
				"star",
				"home",
				"mail",
				"edit",
				"reply",
				"feed",
				"warning",
				"share",
				"attachment",
				"location",
				"checkmark",
				"menu",
				"refresh",
				"minimize",
				"maximize",
				"404",
				"spam",
				"summary",
				"cloud",
				"key",
				"dot",
				"next",
				"previous",
				"expand",
				"collapse",
				"dropdown",
				"dropdown-left",
				"top",
				"draggable",
				"phone",
				"send-to-phone",
				"plugin",
				"cloud-download",
				"cloud-upload",
				"external",
				"document",
				"book",
				"cog",
				"unapprove",
				"cart",
				"pause",
				"stop",
				"skip-back",
				"skip-ahead",
				"play",
				"tablet",
				"send-to-tablet",
				"info",
				"notice",
				"help",
				"fastforward",
				"rewind",
				"portfolio",
				"heart",
				"code",
				"subscribe",
				"unsubscribe",
				"subscribed",
				"reply-alt",
				"reply-single",
				"flag",
				"print",
				"lock",
				"bold",
				"italic",
				"picture",

				/* Generic shapes */
				"uparrow",
				"rightarrow",
				"downarrow",
				"leftarrow"
			];
			options[1] = 'genericon';
		};
	};
	font_set();

	function build_list($popup,$button,clear) {
	  $list = $popup.find('.agip-icon-picker-list');
	  if (clear==1) { $list.empty(); // clear list //
	  }
	  for (var i in icons) {
		  $list.append('<li data-icon="'+icons[i]+'"><a href="#" title="'+icons[i]+'"><span class="'+options[0]+' '+options[1]+'-'+icons[i]+'"></span></a></li>');
	  };
				$('a', $list).click(function(e) {
					e.preventDefault();
					var title = $(this).attr("title");
					$target.val(options[0]+"|"+options[1]+"-"+title);
					$button.removeClass().addClass("button agip-icon-picker "+options[0]+" "+options[1]+"-"+title);
                    var element = 'customize-control-' + $button.parent().attr("id");
                    jQuery( '#'+ element +' #agip_icon' ).val(options[1]+"-"+title).trigger('change');
					removePopup();
				});
	};
	
			function removePopup(){
				$(".agip-icon-picker-container").remove();
			}
	
			$button = $('.agip-icon-picker');
			$button.each( function() {
				$(this).on('click.iconPicker', function() {
					createPopup($(this));
				});
			});


			function createPopup($button) {
				$target = $($button.data('target'));
				$popup = $('<div class="agip-icon-picker-container"> \
						<div class="agip-icon-picker-control" /> \
						<ul class="agip-icon-picker-list" /> \
					</div>')
					.css({
						'top': $button.offset().top,
						'left': $button.offset().left
					});
				build_list($popup,$button,0);
				var $control = $popup.find('.agip-icon-picker-control');
                
                /*
				$control.html('<p>Select Font: <select><option value="dashicons">Dashicons</option><option value="fa">Font Awesome</option><option value="genericon">Genericons</option></select></p>'+
				'<a data-direction="back" href="#"><span class="dashicons dashicons-arrow-left-alt2"></span></a> '+
				'<input type="text" class="" placeholder="Search" />'+
				'<a data-direction="forward" href="#"><span class="dashicons dashicons-arrow-right-alt2"></span></a>'+
				'');*/
                
                $control.html('<p>Select Font: <select><option value="fa">Font Awesome</option></select></p>'+
				'<a data-direction="back" href="#"><span class="dashicons dashicons-arrow-left-alt2"></span></a> '+
				'<input type="text" class="" placeholder="Search" />'+
				'<a data-direction="forward" href="#"><span class="dashicons dashicons-arrow-right-alt2"></span></a>'+
				'');

				$('select', $control).on('change', function(e) {
					e.preventDefault();
					if (this.value != options[0]) {
						options[0] = this.value;
						font_set();
						build_list($popup,$button,1);
					};
				});

				$('a', $control).click(function(e) {
					e.preventDefault();
					if ($(this).data('direction') === 'back') {
						//move last 25 elements to front
						$('li:gt(' + (icons.length - 26) + ')', $list).each(function() {
							$(this).prependTo($list);
						});
					} else {
						//move first 25 elements to the end
						$('li:lt(25)', $list).each(function() {
							$(this).appendTo($list);
						});
					}
				});

				$popup.appendTo('body').show();

				$('input', $control).on('keyup', function(e) {
					var search = $(this).val();
					if (search === '') {
						//show all again
						$('li:lt(25)', $list).show();
					} else {
						$('li', $list).each(function() {
							if ($(this).data('icon').toString().toLowerCase().indexOf(search.toLowerCase()) !== -1) {
								$(this).show();
							} else {
								$(this).hide();
							}
						});
					}
				});
				$(document).mouseup(function (e){
					if (!$popup.is(e.target) && $popup.has(e.target).length === 0) {
						removePopup();
					}
				});
			}
	}


	$(function() {
		$('.agip-icon-picker').iconPicker();
	});

}(jQuery));
