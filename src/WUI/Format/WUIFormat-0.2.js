/*
 * WUIFormat - v0.2
 * Author: Sergio E. Belmar (wuijs.project@gmail.com)
 * Copyright (c) Sergio E. Belmar (wuijs.project@gmail.com)
 */

class WUIFormat {

	static version = "0.2";

	static _initClass() {
		Date.prototype.wuiLoadNames();
	}

	static numberToString(number, options) {
		return typeof (number) == "number" ? number.wuiToString(options) : "error";
	}

	static numberToSizeString(number) {
		return typeof (number) == "number" ? number.wuiToSizeString() : "error";
	}

	static numberToModule11(number, codeTen) {
		return typeof (number) == "number" && codeTen != null ? number.wuiToModule11(codeTen) : "error";
	}

	static numberToModule23(number, map) {
		return typeof (number) == "number" ? number.wuiToModule23(map) : "error";
	}

	static dateToString(date, format, options) {
		return date instanceof Date ? date.wuiToString(format, options) : "error";
	}

	static validateDate(date, format) {
		return typeof (date) == "string" ? date.wuiValidateDate(format) : false;
	}

	static validateEmail(email) {
		return typeof (email) == "string" ? email.wuiValidateEmail() : false;
	}

	static validateEmailList(list, separator) {
		return typeof (list) == "string" ? list.wuiValidateEmailList(separator) : false;
	}

	static validatePhone(phone, length) {
		return typeof (phone) == "string" ? phone.wuiValidatePhone(length) : false;
	}

	static validatePhoneList(list, length, separator) {
		return typeof (list) == "string" ? list.wuiValidatePhoneList(length, separator) : false;
	}

	static validateURL(url) {
		return typeof (url) == "string" ? url.wuiValidateURL() : false;
	}

	static validateURLList(list, separator) {
		return typeof (list) == "string" ? list.wuiValidateURLList(separator) : false;
	}

	static validateIPv4(ipv4) {
		return typeof (ipv4) == "string" ? ipv4.wuiValidateIPv4() : false;
	}

	static validateModule11(number, codeTen) {
		return typeof (number) == "number" && codeTen != null ? number.wuiValidateModule11(codeTen) : false;
	}

	static validateModule23(number, map) {
		return typeof (number) == "number" ? number.wuiValidateModule23(map) : false;
	}

	static validateNID(nid, countryCode) {
		return typeof (nid) == "string" ? nid.wuiValidateNID(countryCode) : false;
	}

	static loadDate(date, format) {
		return Date.prototype.wuiLoad(date, format);
	}
}

Number.prototype.wuiDefaults = {
	numberPrefix: "",
	numberSufix: "",
	thousandsSeparator: ",",
	decimalLength: "auto",
	decimalSeparator: "."
}

Number.prototype.wuiToString = function (options = {}) {
	const defaults = structuredClone(this.wuiDefaults);
	Object.entries(defaults).forEach(([name, value]) => {
		if (!(name in options)) {
			options[name] = value;
		}
	});
	let
		number = parseFloat(this),
		decLen = options.decimalLength;
	const
		prefix = options.numberPrefix,
		symbol = number < 0 ? "-" : "",
		thoSep = options.thousandsSeparator,
		decSep = options.decimalSeparator,
		sufix = options.numberSufix;
	let i, j;
	if (decLen.toString().match(/auto/i)) {
		decLen = number.toString().match(/\./) ? number.toString().replace(/^-*\d+\./, "").length : 0;
	}
	i = parseInt(number = Math.abs(+number || 0).toFixed(decLen)) + "";
	j = (j = i.length) > 3 ? j % 3 : 0;
	return prefix + symbol + (j ? i.toString().substr(0, j) + thoSep : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thoSep) + (decLen ? decSep + Math.abs(number - i).toFixed(decLen).slice(2) : "") + sufix;
}

Number.prototype.wuiToSizeString = function () {
	const size = this;
	const div = size < 1024 ? 1 : size < Math.pow(1024, 2) ? 1024 : size < Math.pow(1024, 3) ? Math.pow(1024, 2) : Math.pow(1024, 3);
	const uni = size < 1024 ? "B" : size < Math.pow(1024, 2) ? "KB" : size < Math.pow(1024, 3) ? "MB" : "TB";
	return parseInt(size / div).wuiToString() + " " + uni;
};

Number.prototype.wuiToModule11 = function (codeTen) {
	const str = this.toString();
	let sum = 0, factor = 2;
	for (let i = str.length - 1; i >= 0; i--) {
		sum += Number(str.charAt(i)) * factor;
		factor = factor == 7 ? 2 : factor + 1;
	}
	const remainder = 11 - (sum % 11);
	if (remainder == 10 && codeTen != null) return codeTen.toUpperCase();
	if (remainder == 11) return "0";
	return remainder.toString();
}

Number.prototype.wuiToModule23 = function (map) {
	return map.charAt(this % 23);
}

String.prototype.wuiDefaults = {
	emailListSeparator: ",",
	phoneLength: 10,
	phoneListSeparator: ",",
	urlListSeparator: ","
}

String.prototype.wuiConstants = {
	tlds: ("" // http://data.iana.org/TLD/tlds-alpha-by-domain.txt, 2022073000
		+ "AAA AARP ABARTH ABB ABBOTT ABBVIE ABC ABLE ABOGADO ABUDHABI AC ACADEMY ACCENTURE ACCOUNTANT ACCOUNTANTS ACO ACTOR AD ADAC ADS ADULT AE AEG AERO AETNA AF AFL AFRICA AG AGAKHAN AGENCY AI AIG AIRBUS AIRFORCE AIRTEL AKDN AL ALFAROMEO ALIBABA ALIPAY ALLFINANZ ALLSTATE ALLY ALSACE ALSTOM AM AMAZON AMERICANEXPRESS AMERICANFAMILY AMEX AMFAM AMICA AMSTERDAM ANALYTICS ANDROID ANQUAN ANZ AO AOL APARTMENTS APP APPLE AQ AQUARELLE AR ARAB ARAMCO ARCHI ARMY ARPA ART ARTE AS ASDA ASIA ASSOCIATES AT ATHLETA ATTORNEY AU AUCTION AUDI AUDIBLE AUDIO AUSPOST AUTHOR AUTO AUTOS AVIANCA AW AWS AX AXA AZ AZURE"
		+ " BA BABY BAIDU BANAMEX BANANAREPUBLIC BAND BANK BAR BARCELONA BARCLAYCARD BARCLAYS BAREFOOT BARGAINS BASEBALL BASKETBALL BAUHAUS BAYERN BB BBC BBT BBVA BCG BCN BD BE BEATS BEAUTY BEER BENTLEY BERLIN BEST BESTBUY BET BF BG BH BHARTI BI BIBLE BID BIKE BING BINGO BIO BIZ BJ BLACK BLACKFRIDAY BLOCKBUSTER BLOG BLOOMBERG BLUE BM BMS BMW BN BNPPARIBAS BO BOATS BOEHRINGER BOFA BOM BOND BOO BOOK BOOKING BOSCH BOSTIK BOSTON BOT BOUTIQUE BOX BR BRADESCO BRIDGESTONE BROADWAY BROKER BROTHER BRUSSELS BS BT BUGATTI BUILD BUILDERS BUSINESS BUY BUZZ BV BW BY BZ BZH"
		+ " CA CAB CAFE CAL CALL CALVINKLEIN CAM CAMERA CAMP CANCERRESEARCH CANON CAPETOWN CAPITAL CAPITALONE CAR CARAVAN CARDS CARE CAREER CAREERS CARS CASA CASE CASH CASINO CAT CATERING CATHOLIC CBA CBN CBRE CBS CC CD CENTER CEO CERN CF CFA CFD CG CH CHANEL CHANNEL CHARITY CHASE CHAT CHEAP CHINTAI CHRISTMAS CHROME CHURCH CI CIPRIANI CIRCLE CISCO CITADEL CITI CITIC CITY CITYEATS CK CL CLAIMS CLEANING CLICK CLINIC CLINIQUE CLOTHING CLOUD CLUB CLUBMED CM CN CO COACH CODES COFFEE COLLEGE COLOGNE COM COMCAST COMMBANK COMMUNITY COMPANY COMPARE COMPUTER COMSEC CONDOS CONSTRUCTION CONSULTING CONTACT CONTRACTORS COOKING COOKINGCHANNEL COOL COOP CORSICA COUNTRY COUPON COUPONS COURSES CPA CR CREDIT CREDITCARD CREDITUNION CRICKET CROWN CRS CRUISE CRUISES CU CUISINELLA CV CW CX CY CYMRU CYOU CZ"
		+ " DABUR DAD DANCE DATA DATE DATING DATSUN DAY DCLK DDS DE DEAL DEALER DEALS DEGREE DELIVERY DELL DELOITTE DELTA DEMOCRAT DENTAL DENTIST DESI DESIGN DEV DHL DIAMONDS DIET DIGITAL DIRECT DIRECTORY DISCOUNT DISCOVER DISH DIY DJ DK DM DNP DO DOCS DOCTOR DOG DOMAINS DOT DOWNLOAD DRIVE DTV DUBAI DUNLOP DUPONT DURBAN DVAG DVR DZ"
		+ " EARTH EAT EC ECO EDEKA EDU EDUCATION EE EG EMAIL EMERCK ENERGY ENGINEER ENGINEERING ENTERPRISES EPSON EQUIPMENT ER ERICSSON ERNI ES ESQ ESTATE ET ETISALAT EU EUROVISION EUS EVENTS EXCHANGE EXPERT EXPOSED EXPRESS EXTRASPACE"
		+ " FAGE FAIL FAIRWINDS FAITH FAMILY FAN FANS FARM FARMERS FASHION FAST FEDEX FEEDBACK FERRARI FERRERO FI FIAT FIDELITY FIDO FILM FINAL FINANCE FINANCIAL FIRE FIRESTONE FIRMDALE FISH FISHING FIT FITNESS FJ FK FLICKR FLIGHTS FLIR FLORIST FLOWERS FLY FM FO FOO FOOD FOODNETWORK FOOTBALL FORD FOREX FORSALE FORUM FOUNDATION FOX FR FREE FRESENIUS FRL FROGANS FRONTDOOR FRONTIER FTR FUJITSU FUN FUND FURNITURE FUTBOL FYI"
		+ " GA GAL GALLERY GALLO GALLUP GAME GAMES GAP GARDEN GAY GB GBIZ GD GDN GE GEA GENT GENTING GEORGE GF GG GGEE GH GI GIFT GIFTS GIVES GIVING GL GLASS GLE GLOBAL GLOBO GM GMAIL GMBH GMO GMX GN GODADDY GOLD GOLDPOINT GOLF GOO GOODYEAR GOOG GOOGLE GOP GOT GOV GP GQ GR GRAINGER GRAPHICS GRATIS GREEN GRIPE GROCERY GROUP GS GT GU GUARDIAN GUCCI GUGE GUIDE GUITARS GURU GW GY"
		+ " HAIR HAMBURG HANGOUT HAUS HBO HDFC HDFCBANK HEALTH HEALTHCARE HELP HELSINKI HERE HERMES HGTV HIPHOP HISAMITSU HITACHI HIV HK HKT HM HN HOCKEY HOLDINGS HOLIDAY HOMEDEPOT HOMEGOODS HOMES HOMESENSE HONDA HORSE HOSPITAL HOST HOSTING HOT HOTELES HOTELS HOTMAIL HOUSE HOW HR HSBC HT HU HUGHES HYATT HYUNDAI"
		+ " IBM ICBC ICE ICU ID IE IEEE IFM IKANO IL IM IMAMAT IMDB IMMO IMMOBILIEN IN INC INDUSTRIES INFINITI INFO ING INK INSTITUTE INSURANCE INSURE INT INTERNATIONAL INTUIT INVESTMENTS IO IPIRANGA IQ IR IRISH IS ISMAILI IST ISTANBUL IT ITAU ITV"
		+ " JAGUAR JAVA JCB JE JEEP JETZT JEWELRY JIO JLL JM JMP JNJ JO JOBS JOBURG JOT JOY JP JPMORGAN JPRS JUEGOS JUNIPER"
		+ " KAUFEN KDDI KE KERRYHOTELS KERRYLOGISTICS KERRYPROPERTIES KFH KG KH KI KIA KIDS KIM KINDER KINDLE KITCHEN KIWI KM KN KOELN KOMATSU KOSHER KP KPMG KPN KR KRD KRED KUOKGROUP KW KY KYOTO KZ"
		+ " LA LACAIXA LAMBORGHINI LAMER LANCASTER LANCIA LAND LANDROVER LANXESS LASALLE LAT LATINO LATROBE LAW LAWYER LB LC LDS LEASE LECLERC LEFRAK LEGAL LEGO LEXUS LGBT LI LIDL LIFE LIFEINSURANCE LIFESTYLE LIGHTING LIKE LILLY LIMITED LIMO LINCOLN LINDE LINK LIPSY LIVE LIVING LK LLC LLP LOAN LOANS LOCKER LOCUS LOFT LOL LONDON LOTTE LOTTO LOVE LPL LPLFINANCIAL LR LS LT LTD LTDA LU LUNDBECK LUXE LUXURY LV LY"
		+ " MA MACYS MADRID MAIF MAISON MAKEUP MAN MANAGEMENT MANGO MAP MARKET MARKETING MARKETS MARRIOTT MARSHALLS MASERATI MATTEL MBA MC MCKINSEY MD ME MED MEDIA MEET MELBOURNE MEME MEMORIAL MEN MENU MERCKMSD MG MH MIAMI MICROSOFT MIL MINI MINT MIT MITSUBISHI MK ML MLB MLS MM MMA MN MO MOBI MOBILE MODA MOE MOI MOM MONASH MONEY MONSTER MORMON MORTGAGE MOSCOW MOTO MOTORCYCLES MOV MOVIE MP MQ MR MS MSD MT MTN MTR MU MUSEUM MUSIC MUTUAL MV MW MX MY MZ"
		+ " NA NAB NAGOYA NAME NATURA NAVY NBA NC NE NEC NET NETBANK NETFLIX NETWORK NEUSTAR NEW NEWS NEXT NEXTDIRECT NEXUS NF NFL NG NGO NHK NI NICO NIKE NIKON NINJA NISSAN NISSAY NL NO NOKIA NORTHWESTERNMUTUAL NORTON NOW NOWRUZ NOWTV NP NR NRA NRW NTT NU NYC NZ"
		+ " OBI OBSERVER OFFICE OKINAWA OLAYAN OLAYANGROUP OLDNAVY OLLO OM OMEGA ONE ONG ONL ONLINE OOO OPEN ORACLE ORANGE ORG ORGANIC ORIGINS OSAKA OTSUKA OTT OVH"
		+ " PA PAGE PANASONIC PARIS PARS PARTNERS PARTS PARTY PASSAGENS PAY PCCW PE PET PF PFIZER PG PH PHARMACY PHD PHILIPS PHONE PHOTO PHOTOGRAPHY PHOTOS PHYSIO PICS PICTET PICTURES PID PIN PING PINK PIONEER PIZZA PK PL PLACE PLAY PLAYSTATION PLUMBING PLUS PM PN PNC POHL POKER POLITIE PORN POST PR PRAMERICA PRAXI PRESS PRIME PRO PROD PRODUCTIONS PROF PROGRESSIVE PROMO PROPERTIES PROPERTY PROTECTION PRU PRUDENTIAL PS PT PUB PW PWC PY"
		+ " QA QPON QUEBEC QUEST"
		+ " RACING RADIO RE READ REALESTATE REALTOR REALTY RECIPES RED REDSTONE REDUMBRELLA REHAB REISE REISEN REIT RELIANCE REN RENT RENTALS REPAIR REPORT REPUBLICAN REST RESTAURANT REVIEW REVIEWS REXROTH RICH RICHARDLI RICOH RIL RIO RIP RO ROCHER ROCKS RODEO ROGERS ROOM RS RSVP RU RUGBY RUHR RUN RW RWE RYUKYU"
		+ " SA SAARLAND SAFE SAFETY SAKURA SALE SALON SAMSCLUB SAMSUNG SANDVIK SANDVIKCOROMANT SANOFI SAP SARL SAS SAVE SAXO SB SBI SBS SC SCA SCB SCHAEFFLER SCHMIDT SCHOLARSHIPS SCHOOL SCHULE SCHWARZ SCIENCE SCOT SD SE SEARCH SEAT SECURE SECURITY SEEK SELECT SENER SERVICES SES SEVEN SEW SEX SEXY SFR SG SH SHANGRILA SHARP SHAW SHELL SHIA SHIKSHA SHOES SHOP SHOPPING SHOUJI SHOW SHOWTIME SI SILK SINA SINGLES SITE SJ SK SKI SKIN SKY SKYPE SL SLING SM SMART SMILE SN SNCF SO SOCCER SOCIAL SOFTBANK SOFTWARE SOHU SOLAR SOLUTIONS SONG SONY SOY SPA SPACE SPORT SPOT SR SRL SS ST STADA STAPLES STAR STATEBANK STATEFARM STC STCGROUP STOCKHOLM STORAGE STORE STREAM STUDIO STUDY STYLE SU SUCKS SUPPLIES SUPPLY SUPPORT SURF SURGERY SUZUKI SV SWATCH SWISS SX SY SYDNEY SYSTEMS SZ"
		+ " TAB TAIPEI TALK TAOBAO TARGET TATAMOTORS TATAR TATTOO TAX TAXI TC TCI TD TDK TEAM TECH TECHNOLOGY TEL TEMASEK TENNIS TEVA TF TG TH THD THEATER THEATRE TIAA TICKETS TIENDA TIFFANY TIPS TIRES TIROL TJ TJMAXX TJX TK TKMAXX TL TM TMALL TN TO TODAY TOKYO TOOLS TOP TORAY TOSHIBA TOTAL TOURS TOWN TOYOTA TOYS TR TRADE TRADING TRAINING TRAVEL TRAVELCHANNEL TRAVELERS TRAVELERSINSURANCE TRUST TRV TT TUBE TUI TUNES TUSHU TV TVS TW TZ"
		+ " UA UBANK UBS UG UK UNICOM UNIVERSITY UNO UOL UPS US UY UZ"
		+ " VA VACATIONS VANA VANGUARD VC VE VEGAS VENTURES VERISIGN VERSICHERUNG VET VG VI VIAJES VIDEO VIG VIKING VILLAS VIN VIP VIRGIN VISA VISION VIVA VIVO VLAANDEREN VN VODKA VOLKSWAGEN VOLVO VOTE VOTING VOTO VOYAGE VU VUELOS"
		+ " WALES WALMART WALTER WANG WANGGOU WATCH WATCHES WEATHER WEATHERCHANNEL WEBCAM WEBER WEBSITE WED WEDDING WEIBO WEIR WF WHOSWHO WIEN WIKI WILLIAMHILL WIN WINDOWS WINE WINNERS WME WOLTERSKLUWER WOODSIDE WORK WORKS WORLD WOW WS WTC WTF"
		+ " XBOX XEROX XFINITY XIHUAN XIN XXX XYZ"
		+ " YACHTS YAHOO YAMAXUN YANDEX YE YODOBASHI YOGA YOKOHAMA YOU YOUTUBE YT YUN"
		+ " ZA ZAPPOS ZARA ZERO ZIP ZM ZONE ZUERICH ZW"
	).toLowerCase().split(/\s+/)
}

String.prototype.wuiValidateDate = function (format = "default") {
	const pattern = format == "default" ? this.wuiDefaults.dateFormat : format == "standard" ? "yyyy-mm-dd" : format;
	let valid = true;
	if (this == null || this == "") {
		valid = false;
	} else {
		const wrdValues = this.split(/\W+/),
			wrdFormats = pattern.split(/\W+/),
			sepValues = this.split(/\w+/),
			sepFormats = pattern.split(/\w+/);
		let i, f, v, e;
		if (wrdValues.length != wrdFormats.length || sepValues.length != sepFormats.length) {
			valid = false;
		} else {
			for (i in wrdFormats) {
				f = wrdFormats[i];
				v = wrdValues[i];
				e = !v.match(/\D/) ? parseInt(v) : 0;
				if ((f.match(/^(yyyy|yy|mm|m|dd|d)$/) && v.match(/\D/)) ||
					(f == "yyyy" && v.length != 4) ||
					(f == "yy" && v.length != 2) ||
					(f.match(/^(mm|m)$/) && (e < 1 || e > 12)) ||
					(f.match(/^(dd|d)$/) && (e < 1 || e > 31))) {
					valid = false;
				}
			}
			for (i in sepFormats) {
				f = sepFormats[i];
				v = sepValues[i];
				if (f != v) {
					valid = false;
				}
			}
		}
	}
	return valid;
}

String.prototype.wuiValidateEmail = function () {
	if (this == null || this == "") return false;
	const tld = (this.toLowerCase().match(/(\w{2,18})$/) || [])[0];
	return /^\w[\w\-\.\~\+]*\@\w[\w\-\.]*\.\w{2,18}$/.test(this) && tld != null && this.wuiConstants.tlds.indexOf(tld) > -1 ? true : false;
}

String.prototype.wuiValidateEmailList = function (separator = this.wuiDefaults.emailListSeparator) {
	let valid = true;
	if (this == null || this == "") {
		valid = false;
	} else {
		const list = this.split(separator);
		for (let i in list) {
			if (!list[i].toString().trim().wuiValidateEmail()) {
				valid = false;
			}
		}
	}
	return valid;
}

String.prototype.wuiValidatePhone = function (length = this.wuiDefaults.phoneLength) {
	if (this == null || this == "") return false;
	return this.length == length && !(/\D/.test(this)) ? true : false;
}

String.prototype.wuiValidatePhoneList = function (length = this.wuiDefaults.phoneLength, separator = this.wuiDefaults.phoneListSeparator) {
	if (this == null || this == "") valid = false;
	const list = this.split(separator);
	let valid = true;
	for (let i in list) {
		if (!list[i].toString().trim().wuiValidatePhone(length)) {
			valid = false;
		}
	}
	return valid;
}

String.prototype.wuiValidateURL = function () {
	if (this == null || this == "") return false;
	const tld = (this.toLowerCase().match(/\b(https?:\/\/)?\w[\w\-\.]*\w\.([a-z]{2,18})(:\d+)*[\/\w\-\.\?\=\&]*\b/) || [])[2] || "";
	const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
	return regexp.test(this) && tld != "" && this.wuiConstants.tlds.indexOf(tld) > -1 ? true : false;
}

String.prototype.wuiValidateURLList = function (separator = this.wuiDefaults.urlListSeparator) {
	if (this == null || this == "") valid = false;
	const list = this.split(separator);
	let valid = true;
	for (let i in list) {
		if (!list[i].toString().trim().colibraValidURL()) {
			valid = false;
		}
	}
	return valid;
}

String.prototype.wuiValidateIPv4 = function () {
	if (this == null || this == "") return false;
	return /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/.test(this) ? true : false;
}

String.prototype.wuiValidateModule11 = function (codeTen) {
	if (!this || this.trim() == "" || !codeTen) return false;
	const value = this.trim().replace(/[\.-]/g, "");
	if (value.length < 2) return false;
	const number = value.slice(0, -1);
	const control = value.slice(-1).toUpperCase();
	if (!/^\d+$/.test(number)) return false;
	return BigInt(number).wuiToModule11(codeTen) == control;
}

String.prototype.wuiValidateModule23 = function (map) {
	if (!this || this.trim() == "") return false;
	const value = this.trim().toUpperCase().replace(/[\.-]/g, "");
	if (!value) return false;
	const number = value.slice(0, -1);
	const control = value.slice(-1);
	if (!/^\d+$/.test(number) || !map.includes(control)) return false;
	return BigInt(number).wuiToModule23(map) == control;
}

String.prototype.wuiValidateNID = function (countryCode) {
	const value = this.trim().toUpperCase();
	switch (countryCode) {
		case "CL": // RUN/RUT
			return value.replace(/\./g, "").wuiValidateModule11("K");
		case "PY": // RUC
			return value.replace(/\./g, "").wuiValidateModule11("0");
		case "ES": // DNI/NIE
			if (!/^[0-9XYZ][0-9]{7}[A-Z]$/.test(value)) return false;
			return value
				.replace(/^X/, '0')
				.replace(/^Y/, '1')
				.replace(/^Z/, '2')
				.wuiValidateModule23("TRWAGMYFPDXBNJZSQVHLCKET");
		default:
			return false;
	}
}

Date.prototype.wuiConstants = {
	locales: ("" // https://www.techonthenet.com/js/language_tags.php 20241007
		+ "ar-SA bn-BD bn-IN cs-CZ da-DK de-AT de-CH de-DE el-GR en-AU en-CA en-GB en-IE en-IN en-NZ en-US en-ZA es-AR es-CL es-CO es-ES es-MX es-US fi-FI fr-BE fr-CA fr-CH fr-FR he-IL hi-IN hu-HU id-ID it-CH it-IT ja-JP ko-KR nl-BE nl-NL no-NO pl-PL pt-BR pt-PT ro-RO ru-RU sk-SK sv-SE ta-IN ta-LK th-TH tr-TR zh-CN zh-HK zh-TW"
	).toLowerCase().split(/\s+/)
}

Date.prototype.wuiDefaults = {
	utc: false,
	locales: "en-US",
	dateFormat: "yyyy-mm-dd",
	timeFormat: "hh:MM:ss",
	datetimeFormat: "yyyy-mm-dd hh:MM:ss",
	weekDaysNames: [],
	monthsNames: []
}

Date.prototype.wuiLoadNames = function () {
	if (this.wuiConstants.locales.indexOf(this.wuiDefaults.locales.toLowerCase()) > -1) {
		let i;
		for (i = 0; i < 7; i++) {
			const name = new Date(2023, 0, i + 1).toLocaleString(this.wuiDefaults.locales, { weekday: "long" }); // 2023-01-01: sunday
			this.wuiDefaults.weekDaysNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
		}
		for (i = 0; i < 12; i++) {
			const name = new Date(2023, i, 1).toLocaleString(this.wuiDefaults.locales, { month: "long" });
			this.wuiDefaults.monthsNames[i] = name.replace(/^\s*(\w)/, letter => letter.toUpperCase());
		}
	}
}

Date.prototype.wuiLoad = function (value, format = "default", options = {}) {
	const defaults = structuredClone(this.wuiDefaults);
	Object.entries(defaults).forEach(([name, value]) => {
		if (!(name in options)) {
			options[name] = value;
		}
	});
	let string = "";
	switch (format.toLowerCase()) {
		case "default":
		case "defaultdatetime":
		case "datetimeformat": string = options.datetimeFormat; break;
		case "standard": string = "yyyy-mm-dd hh:MM:ss"; break;
		case "numeric": string = "yyyy mm dd hh MM ss"; break;
		case "longtime": string = "yyyy-mm-dd T hh:MM:ss"; break;
		default: string = format; break;
	}
	const strings = string.split(/\W+/);
	const values = value.split(/\W+/);
	if (values.length == strings.length) {
		for (let i = 0; i < strings.length; i++) {
			const key = strings[i];
			let value = parseInt(values[i]);
			if (key.match(/^(yyyy|yy)$/)) {
				value = value + (key == "yy" ? 2000 : 0);
				if (options.utc) {
					this.setUTCFullYear(value);
				} else {
					this.setFullYear(value);
				}
			} else if (key.match(/^(mm|m)$/)) {
				value--;
				if (options.utc) {
					this.setUTCMonth(value);
				} else {
					this.setMonth(value);
				}
			} else if (key.match(/^(dd|d)$/)) {
				if (options.utc) {
					this.setUTCDate(value);
				} else {
					this.setDate(value);
				}
			} else if (key.match(/^(hh|h)$/)) {
				if (options.utc) {
					this.setUTCHours(value);
				} else {
					this.setHours(value);
				}
			} else if (key.match(/^(MM|M)$/)) {
				if (options.utc) {
					this.setUTCMinutes(value);
				} else {
					this.setMinutes(value);
				}
			} else if (key.match(/^(ss|s)$/)) {
				this.setSeconds(value);
			}
		}
	}
	return this;
}

Date.prototype.wuiToString = function (format = "default", options = {}) {
	if (isNaN(this)) return "invalid date";
	switch (format.toLowerCase()) {
		case "atom":
		case "rfc3339": return this.toISOString();
		case "cookie":
		case "rfc1123":
		case "rfc2616": return this.toUTCString();
	}
	Object.keys(this.wuiDefaults).forEach(key => {
		options[key] = typeof (options) != "undefined" && key in options ? options[key] : this.wuiDefaults[key];
	});
	const utc = options.utc || false;
	const year = utc ? this.getUTCFullYear() : this.getFullYear(),
		month = utc ? this.getUTCMonth() + 1 : this.getMonth() + 1,
		monthName = options.monthsNames[month - 1],
		day = utc ? this.getUTCDate() : this.getDate(),
		weekDay = utc ? this.getUTCDay() : this.getDay(),
		weekDayName = options.weekDaysNames[weekDay],
		hour = utc ? this.getUTCHours() : this.getHours(),
		minute = utc ? this.getUTCMinutes() : this.getMinutes(),
		second = utc ? this.getUTCSeconds() : this.getSeconds(),
		milliseconds = utc ? this.getUTCMilliseconds() : this.getMilliseconds(),
		offset = utc ? 0 : -this.getTimezoneOffset(),
		timezone = (() => {
			const sign = offset >= 0 ? "+" : "-";
			const minutes = Math.abs(offset);
			return sign + String(Math.floor(minutes / 60)).padStart(2, "0") + String(minutes % 60).padStart(2, "0");
		})();
	const patterns = {
		"yyyy": year,
		"yy": year.toString().substring(2, 2),
		"mmmm": monthName,
		"mmm": monthName.substr(0, 3),
		"mm": ("0" + month).slice(-2),
		"m": month,
		"dd": ("0" + day).slice(-2),
		"d": day,
		"DDDD": weekDayName,
		"DDD": weekDayName.substr(0, 3),
		"DD": weekDayName.substr(0, 2),
		"D": weekDayName.substr(0, 1),
		"hh": ("0" + hour).slice(-2),
		"h": hour,
		"MM": ("0" + minute).slice(-2),
		"M": minute,
		"ss": ("0" + second).slice(-2),
		"s": second,
		"zzz": ("0" + milliseconds).slice(-3),
		"z": milliseconds,
		"o": offset,
		"tz": timezone,
		"gmt": "GMT" + timezone
	};
	let string = "";
	switch (format.toLowerCase()) {
		case "default":
		case "defaultdatetime":
		case "datetimeformat": string = options.datetimeFormat; break;
		case "date":
		case "defaultdate":
		case "dateformat": string = options.dateFormat; break;
		case "time":
		case "defaulttime":
		case "timeformat": string = options.timeFormat; break;
		case "standard": string = "yyyy-mm-dd hh:MM:ss"; break;
		case "numeric": string = "yyyy mm dd hh MM ss"; break;
		case "longtime": string = "yyyy-mm-dd T hh:MM:ss"; break;
		case "atom":
		/*case "rfc3339": string = "yyyy-mm-dd T hh:MM:ss.zzz Z"; break;
		case "cookie":
		case "rfc1123": string = "DDD, dd-mmm-yyyy hh:MM:ss GMT"; break;
		case "rfc2616": string = "DDD, dd mmm yyyy hh:MM:ss GMT"; break;*/
		case "rfc3501": string = "d-mmm-yyyy hh:MM:ss offset"; break;
		default: string = format; break;
	}
	for (let key in patterns) {
		string = string.replace(new RegExp("\\b" + key + "\\b"), patterns[key]);
	}
	if (format.match(/^(numeric|longtime|atom|rfc3339)$/i)) {
		string.replace(/\s/g, "");
	}
	return string;
}

WUIFormat._initClass();