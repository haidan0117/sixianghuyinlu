(function () {
    function setCookie(c_name,value,expiredays){var exdate=new Date();var domain_parts=window.location.host.split('.');var len=domain_parts.length;var domain='';if(len>=2){domain='.'+domain_parts[len-2]+'.'+domain_parts[len-1];}else{domain='.mugeda.com';}exdate.setDate(exdate.getDate()+expiredays);document.cookie=c_name+"="+escape(value)+((expiredays==null)?"":";expires="+exdate.toGMTString())+"; domain="+domain+";path=/";}

    function getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length == 2) return unescape(parts.pop().split(";").shift());
    }

    function getQueryParams() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    if (/vt=(\w+)\&?/.test(location.search)) {
        var versionTag = RegExp.$1;
        setCookie('__mugeda_vid',versionTag,60*60*24*3600);
    } else {
        setCookie('__mugeda_vid','',-3600);
    }
    window['Mugeda'] = window['Mugeda'] || {};
    window['Mugeda']['data'] = window['Mugeda']['data'] || {};

    var stageDom = document.getElementById((window._mrmcp || {})['script_id'] || "Mugeda_6841f867887d6951870077d5")

    _mrmcp = (typeof _mrmcp == 'undefined') ? {} : _mrmcp;
_mrmcp['campaign_id'] = 'none';
_mrmcp['owner_id'] = '683ddc626043b69ba3016475';
_mrmcp['creative_id'] = '6841f867887d6951870077d5';
_mrmcp['ga_url'] = _mrmcp['ga_url'] || (('https:' == document.location.protocol ? 'https://' : 'http://') + 'card.mugeda.com/weixin/card/ga.js');
_mrmcp['width'] = _mrmcp['width'] || 320;
_mrmcp['height'] = _mrmcp['height'] || 626;
_mrmcp['type'] = 'smart';
_mrmcp['title'] = '四相护龈录';
_mrmcp['build_number'] = parseInt('425');
_mrmcp['publish_time'] = 'Thu Jun 12 2025 02:09:48 GMT+0800 (China Standard Time)';
_mrmcp['last_modified'] = '';
_mrmcp['jsapi_config_url'] = '';
_mrmcp['stat_host'] = 'https://6841f867887d6951870077d5.stat.mugeda.com/stats/c.gif';
_mrmcp['track_bot'] = 'http://cd.mugeda.com/media/pages/track/track_20131030.html';
_mrmcp['wechat_thumb_scheme'] = 'https';
_mrmcp['data_server'] = "https://weika.mugeda.cn";
_mrmcp['customer_visitor_tailor_uid'] = "";
var version = _mrmcp['version'] = _mrmcp['version'] != null ? _mrmcp['version'] : '0.4.25';

if(version!='')
    version = '_' + version;

var w = _mrmcp['width'];
var h = _mrmcp['height'];
if (!_mrmcp['creative_path']) {
    var scripts = document.getElementsByTagName('script');
    var src = scripts[scripts.length - 1].getAttribute('src');
    if (src == null || src.lastIndexOf('/') < 0) {
        var href = location.protocol +'//' + location.host + location.pathname;
        _mrmcp['creative_path'] = href.substr(0, href.lastIndexOf('/') + 1);
    }
    else
        _mrmcp['creative_path'] = src.substr(0, idx + 1);
}

if (_mrmcp['host']){
    var pathNames = ['creative_path', 'common_path'];
    for (var i = 0, l = pathNames.length; i < l; i ++) {
        var pathName = pathNames[i];

        if (_mrmcp[pathName]) {
            var pathOriStr = _mrmcp[pathName];
            if(pathOriStr.indexOf('//') === 0) pathOriStr = location.protocol + pathOriStr;
            var pattern = /^(?:(\w+):\/\/)?(?:(\w+):?(\w+)?@)?([^:\/\?#]+)(?::(\d+))?(\/[^\?#]+)?(?:\?([^#]+))?(?:#(\w+))?/;
            var r = pattern.exec(pathOriStr);

            _mrmcp[pathName] = [ _mrmcp[pathName] ];
            for (var j = 0, k = _mrmcp['host'].length; j < k; j ++) {
                var host = _mrmcp['host'][j];
                var s = '';
                //if(r[1]) s += r[1] + ':'; //http
                //s += '//';
                //if(r[2]) s += r[2] + ':'; //username
                //if(r[3]) s += r[3] + '@'; //password
                s += host; //host
                if (r[6]) s += r[6];
                if (r[7]) s += '?' + r[7];
                if (r[8]) s += '#' + r[8];
                _mrmcp[pathName].push(s);
            }
        }
    }
}

    "firstpage-start";
window.Mugeda = window.Mugeda || { data: {} };
window.Mugeda.loadProcessHandle = window.Mugeda.loadProcessHandle || {};

Mugeda.loadProcessHandle['firstpage'] = function (opt) {
    opt = opt || {};
    this.dom = opt.stageDom || thisAni.dom;
    this.type = 'firstpage';
};


Mugeda.loadProcessHandle['firstpage'].prototype.init = function () {
    if (this.inited) return;
    this.inited = true;
    var html = '' +
        '<div style="z-index:20;position: absolute; width: 100%; height: 100%; left:0; top: 0;">' +
        '   <div style="position: absolute;height: 20px; width: 100%;top:20%;text-align: center;font-size: 12px;-webkit-text-stroke: 1px white;">' +
        '       <div style="padding: 5px;opacity: 0;">打开中...</div>' +
        '   </div>' +
        '</div>';
    var dom = document.createElement('div');
    dom.innerHTML = html;
    this.node = dom.childNodes[0];
    this.dom.parentNode.appendChild(this.node);
    this.prevPercent = 0;

};
Mugeda.loadProcessHandle['firstpage'].prototype.update = function (num, all, opt) {
    // console.log(num, all);
};
Mugeda.loadProcessHandle['firstpage'].prototype.remove = function () {
    var self = this;
    setTimeout(function () {
        self.isOver = true;
        self.node.parentNode.removeChild(self.node);
    }, window['_mrmcp'] ? (window['_mrmcp']['loadRemovalDelay'] || 0) : 0);
};
window.lineSplit = "firstpage-end";

window['_mrmcp'] = window['_mrmcp'] || {};
if (/loader=(\w+)\&?/.test(location.search)) {
    window['_mrmcp']['loader'] = RegExp.$1;
}  
 
if(!window['_mrmcp']['loader']){
    var loadProcessHandleInstance = Mugeda['loadProcessHandleInstance'] = new Mugeda['loadProcessHandle']['firstpage']({
        'loadInfo': {"textLoading":0,"messageText":"","messageSize":12,"messageColor":"#FFF","progressColor":"#F36523","progressBackground":"#FFF","backgroundColor":"#000","progressPosition":"20","logoWidth":128,"style":"firstpage"},
        'thisAni': {
            'dom': null,
            'width': 320
        },
        'stageDom': stageDom
    });

    if(['auto', 'landscape', 'portrait'].indexOf("") == -1) {
        loadProcessHandleInstance.init();
        var loadInitNum = 0;
        var loadInterval = setInterval(function () {
            loadProcessHandleInstance.update(loadInitNum, 100, {isTotal: true});
            if (++loadInitNum > 10) clearInterval(loadInterval);
        }, 100);
    }    
}


    //window['Mugeda']['Loader'] = function (a, b, d, e, f, g) {
window['Mugeda']['Loader'] = function (dom, hasScript, _mrmcp) {
    var that = this;
    that._mrmcp = _mrmcp;
    that.crid = _mrmcp['creative_id'];
    that.dom = dom;
    that.resDir = _mrmcp['creative_path'] || "";
    that.playerLoc = _mrmcp['common_path'] || that.resDir;

    var jsPath = _mrmcp['script_sub_path'] || '';
    if(jsPath != '')
        jsPath += '/';

    var isArray = function(o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    };

    var getServerIndex = function(str, total){
        var len = str.length, sum = 0;
        for(var i = 0; i < len && i < 6; i++){
            sum += str.charCodeAt(len - i);
        }
        return sum & total;
    };

    if(!isArray(that.resDir)) that.resDir = [that.resDir];
    if(!isArray(that.playerLoc)) that.playerLoc = [that.playerLoc];


    var cachedLoadList = [];
    var setTimeHandle = null;
    var finalCallback = null;
    var loadRes = function(type, file, deps, index, loadChk){
        if(type == 0){
            var pathList = that.playerLoc;
        }
        else{
            pathList = that.resDir;
        }

        if(file.indexOf('mugeda_smart_renderer_core') >= 0)
        file = file.replace('_core', '');
        var path = pathList[getServerIndex(file, pathList.length)];
        var filePath = path + file;

        cachedLoadList[index == null ? cachedLoadList.length: index] = {file: filePath, deps: deps, loaded: 0, loadChk: loadChk};

        if(!setTimeHandle){
            setTimeHandle = setTimeout(function(){
                setTimeHandle = null;
                var loadNextGroup = function(){
                    var notLoadedList = cachedLoadList.filter(function(item){return item.loaded < 2});
                    if(notLoadedList.length == 0) {
                        finalCallback();

                    }
                    else{
                        notLoadedList.forEach(function(item){
                            if(item.loaded != 0) return;
                            if(item.deps.some(function(depIndex){
                                return cachedLoadList[depIndex].loaded < 2;
                            })){
                                return;
                            }
                            var sc = document.createElement('script');
                            sc.src = item.file;
                            item.loaded = 1;
                            sc.onload = function(){
                                var next = function() {
                                    item.loaded = 2;
                                    loadNextGroup();
                                };
                                if(item.loadChk){
                                    item.loadChk(next);
                                }
                                else next();
                            };
                            sc.onerror = function(){
                                item.loaded = 3;
                                console.log('err ' + item.file);
                                loadNextGroup();
                            };
                            document.getElementsByTagName("head")[0].appendChild(sc);
                        });
                    }
                };
                loadNextGroup();
            }, 0);
        }

    };


    if(!Mugeda['css3PlayerLoaded']) {
        var resPath = jsPath;
        
            loadRes(0, resPath + "mugeda_smart_renderer_core" + version + ".js", [], 0);
        
            loadRes(0, resPath + "mugeda_smart_renderer_slateText" + version + ".js", [0], 1);
        
        loadRes(0, resPath + "mugeda_utils" + version + ".js", [0]);
        loadRes(1, jsPath + that.crid + ".js?publishTime=1749665388669", [], undefined, function(callback){
            var chk = function(){
                if(Mugeda.data["id_" + that.crid]) {
                    callback();
                }
                else{
                    setTimeout(chk, 100);
                }
            };
            chk();

        });
        finalCallback = that.start.bind(that);
    }
};
Mugeda.Loader.prototype.start = function () {
    if (2 == Mugeda.css3PlayerLoaded) {
        var a = document.createElement("div");
        var node = this.dom;
        while (node) {
            if (node.tagName && node.tagName.toLowerCase() == 'body'){
                break;
            }
            else {
                node = node.parentNode;
            }
        }
        if (node) {
            this.dom.parentNode.insertBefore(a, this.dom);
        }
        else if (document.body) {
            var track = document.getElementById('mugeda_track');
            track.parentNode.appendChild(a);
        }
        if (_mrmcp['width'] != null) {
            Mugeda.data['id_' + this.crid].wt = _mrmcp['width'];
            Mugeda.data['id_' + this.crid].ht = _mrmcp['height'];
        }
        Mugeda['startAnimation']("id_" + this.crid, false ? "actions_" + this.crid + ".js?publishTime=1749665388669" : "", a, this.resDir, this.name, null, this._mrmcp)
    }
    else {
        Mugeda.creationToBeLoad = Mugeda.creationToBeLoad || [];
        Mugeda.creationToBeLoad.push(this)
    }
};



    var loader = new Mugeda.Loader(stageDom, false, window._mrmcp || {});
    loader.loadProcessHandleInstance = loadProcessHandleInstance;

    var track_pixel = "";
    var pixels = _mrmcp['additional_pixels']||[];
    if(_mrmcp['impression_pixel']) pixels.push(_mrmcp['impression_pixel']);
    for(var pIndex = 0; pIndex < pixels.length; pIndex++) {
        var pixel = pixels[pIndex];
        var valid = pixel.indexOf('%TRACKURL%') < 0;
        if(valid){
            var parTag = pixel.indexOf('?') < 0 ? '?' : '&';
            pixel += parTag + "ts=" + (new Date()).getTime();
            var search = window.location.search;
            if (search){
                var params = search.split('?')[1];
                pixel += "&" + params;
            }
            track_pixel += "<img id='external_impression_tracker' style='display:none' src='"+pixel+"' />";
        }
    }

    
    var trackString = "\n<div id=\'mugeda_track\'>\n<script>\nvar _mrmma_campid = \'none\';\nvar _mrmma_urid = \'683ddc626043b69ba3016475\';\nvar _mrmma_crid = \'6841f867887d6951870077d5\';\nvar _mrmma_title = \'四相护龈录\';\nvar _mrmma_circle = \'mugeda\';\nvar _mrmma_width = \"320\";\nvar _mrmma_height = \"626\";\nvar _mrmma_type = \'smart\';\nvar title = \'四相护龈录\';\ntitle = title.substr(0, Math.min(title.length, 32));\nvar _mrmma_var1 = \'campid=none&urid=683ddc626043b69ba3016475&crid=6841f867887d6951870077d5\';\nvar _mrmma_var2 = \'circle=mugeda&type=smart&width=320&height=626&display=normal&title=\' + title;\nvar isLocal = !window.location || !window.location.host;\n<\/script>\n\n<script type=\'text\/javascript\'>\nvar ua = (function () {\nvar replacer = { \'Linux\': \'$L\', \'Windows\\\\s*Phone\': \'$W\', \'Windows\\\\s*NT\': \'$N\', \'Mac\\\\s*OS\': \'$O\', \'Android\': \'$A\', \'Mozilla\': \'$M\', \'Gecko\': \'$G\', \'Trident\': \'$T\', \'AppleWebKit\': \'$K\', \'Chrome\': \'$C\', \'Safari\': \'$S\', \'KHTML\': \'$H\', \'Version\': \'$V\', \'iPhone\': \'$I\', \'Mobile\': \'$B\', \'Build\': \'$b\', \'like\': \'$l\', \'MicroMessenger\': \'$g\', \'MugedaCard\': \'$m\', \';\\\\s+\': \';\', \',\\\\s+\': \',\', \'\\\\s+\\\\(\': \'(\', \'\\\\)\\\\s+\': \')\', \'\\\\s+\\\\[\': \'[\', \'\\\\]\\\\s+\': \']\', \'\\\\s*(\\\\$\\\\w+)\\\\s*\': \'$1\' };\nvar s = navigator.userAgent;\nfor (r in replacer) {\ns = s.replace(new RegExp(r, \'ig\'), replacer[r]);\n}\nreturn s;\n})();\nfunction getClientName() {\nvar ua = navigator.userAgent.toLowerCase();\nif (\/MicroMessenger\/i.test(ua)) return \'weixin\';\nelse if (window.mucard != null) return \'AppVer1\';\nelse if (ua.indexOf(\'mugedacard\') >= 0) return \'AppVer2\';\nelse return \'other\';\n}\nif(isLocal){\nvar track_url = \'http:\/\/cdn.mugeda.com\/media\/pages\/track\/track_20131030.html\' + \'?\' + _mrmma_var1 + \'&\' + _mrmma_var2;\nvar tracker = document.createElement(\'iframe\');\ntracker.id = \'6841f867887d6951870077d5\';\ntracker.src = track_url;\ntracker.style.display = \'none\';\ntracker.style.width = \'1px\';\ntracker.style.height = \'1px\';\nvar s = document.body.appendChild(tracker);\n}else{\nvar _gaq = _gaq || [];\n_gaq.push([\'_setAccount\', \'UA-38551434-1\']);\n_gaq.push([\'_setCustomVar\', 1, \'Identity Tags\', (typeof _mrmma_var1 == \'undefined\') ? \'none\' : _mrmma_var1]);\n_gaq.push([\'_setCustomVar\', 2, \'Property Tags\', (typeof _mrmma_var2 == \'undefined\') ? \'none\' : _mrmma_var2]);\n_gaq.push([\'_setCustomVar\', 3, \'Client\', getClientName()]);\n_gaq.push([\'_setCustomVar\', 4, \'User Agent\', ua]);\n_gaq.push([\'_trackPageview\']);\n(function() {\nvar ga = document.createElement(\'script\');\nga.type = \'text\/javascript\';\nga.async = true;\nga.src = _mrmcp[\'ga_url\'];\nvar s = document.getElementsByTagName(\'script\')[0];\ns.parentNode.insertBefore(ga, s);\n})();\n}\n<\/script>\n\n<\/div>\n" + track_pixel;
    if (document.readyState == 'complete' || document.readyState == 'interactive') {
        var div = document.createElement('div');
        div.innerHTML = trackString;
        loader.dom.parentNode.appendChild(div);
        var scripts = div.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            if (scripts[i].src !== '') {
                script.src = scripts[i].src;
            } else {
                script.text = scripts[i].text;
            }
            scripts[i].parentNode.removeChild(scripts[i]);
            i--;
            loader.dom.parentNode.appendChild(script);
        }
    }
    else {
        document.write(trackString);
    }

    if(_mrmcp['render_mode']!='embedded'&&_mrmcp['render_mode']!='inline'){
        document.body.style.margin='0px';
        document.body.style.padding='0px';
        document.body.style.overflow='hidden';
        document.body.style.backgroundColor='rgba(0, 150, 136, 0)';

        document.body.style.height = "100%";
        document.body.parentNode.style.height = "100%";
    }

    })();
