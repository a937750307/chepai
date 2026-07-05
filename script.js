  // ============================================================
  //  车牌数据库
  // ============================================================
  const plateDB = {
    "京": { name: "北京市", region: "华北", cities: { A: "市直/公交/出租", B: "出租车", C: "远郊区", D: "警用", E: "城区", F: "城区", G: "远郊区", H: "城区", J: "城区", K: "城区", L: "城区", M: "城区", N: "城区", P: "城区", Q: "城区", Y: "远郊区" } },
    "津": { name: "天津市", region: "华北", cities: { A: "公交/出租", B: "市区", C: "市区", D: "市区", E: "市区", F: "市区", G: "市区", H: "市区", J: "市区", K: "市区", L: "市区", M: "市区", N: "市区", P: "市区", Q: "市区", R: "市区" } },
    "冀": { name: "河北省", region: "华北", cities: { A: "石家庄", B: "唐山", C: "秦皇岛", D: "邯郸", E: "邢台", F: "保定", G: "张家口", H: "承德", J: "沧州", R: "廊坊", T: "衡水", O: "省直机关" } },
    "晋": { name: "山西省", region: "华北", cities: { A: "太原", B: "大同", C: "阳泉", D: "长治", E: "晋城", F: "朔州", H: "忻州", J: "吕梁", K: "晋中", L: "临汾", M: "运城" } },
    "蒙": { name: "内蒙古自治区", region: "华北", cities: { A: "呼和浩特", B: "包头", C: "乌海", D: "赤峰", E: "呼伦贝尔", F: "兴安盟", G: "通辽", H: "锡林郭勒", J: "乌兰察布", K: "鄂尔多斯", L: "巴彦淖尔", M: "阿拉善" } },
    "辽": { name: "辽宁省", region: "东北", cities: { A: "沈阳", B: "大连", C: "鞍山", D: "抚顺", E: "本溪", F: "丹东", G: "锦州", H: "营口", J: "阜新", K: "辽阳", L: "盘锦", M: "铁岭", N: "朝阳", P: "葫芦岛" } },
    "吉": { name: "吉林省", region: "东北", cities: { A: "长春", B: "吉林", C: "四平", D: "辽源", E: "通化", F: "白山", G: "白城", H: "延边", J: "松原", K: "长白山" } },
    "黑": { name: "黑龙江省", region: "东北", cities: { A: "哈尔滨", B: "齐齐哈尔", C: "牡丹江", D: "佳木斯", E: "大庆", F: "伊春", G: "鸡西", H: "鹤岗", J: "双鸭山", K: "七台河", M: "绥化", N: "黑河", P: "大兴安岭", R: "农垦总局" } },
    "沪": { name: "上海市", region: "华东", cities: { A: "市区", B: "市区", C: "市区", D: "市区", E: "市区", F: "市区", G: "市区", H: "市区", J: "市区", K: "市区", L: "市区", M: "市区", N: "市区" } },
    "苏": { name: "江苏省", region: "华东", cities: { A: "南京", B: "无锡", C: "徐州", D: "常州", E: "苏州", F: "南通", G: "连云港", H: "淮安", J: "盐城", K: "扬州", L: "镇江", M: "泰州", N: "宿迁" } },
    "浙": { name: "浙江省", region: "华东", cities: { A: "杭州", B: "宁波", C: "温州", D: "绍兴", E: "湖州", F: "嘉兴", G: "金华", H: "衢州", J: "台州", K: "丽水", L: "舟山" } },
    "皖": { name: "安徽省", region: "华东", cities: { A: "合肥", B: "芜湖", C: "蚌埠", D: "淮南", E: "马鞍山", F: "淮北", G: "铜陵", H: "安庆", J: "黄山", K: "阜阳", L: "宿州", M: "滁州", N: "六安", P: "宣城", R: "池州", S: "亳州" } },
    "闽": { name: "福建省", region: "华东", cities: { A: "福州", B: "莆田", C: "泉州", D: "厦门", E: "漳州", F: "龙岩", G: "三明", H: "南平", J: "宁德", K: "省直机关" } },
    "赣": { name: "江西省", region: "华东", cities: { A: "南昌", B: "赣州", C: "宜春", D: "吉安", E: "上饶", F: "抚州", G: "九江", H: "景德镇", J: "萍乡", K: "新余", L: "鹰潭" } },
    "鲁": { name: "山东省", region: "华东", cities: { A: "济南", B: "青岛", C: "淄博", D: "枣庄", E: "东营", F: "烟台", G: "潍坊", H: "济宁", J: "泰安", K: "威海", L: "日照", M: "临沂", N: "德州", P: "聊城", Q: "滨州", R: "菏泽", U: "青岛开发区", W: "省直机关" } },
    "豫": { name: "河南省", region: "华中", cities: { A: "郑州", B: "开封", C: "洛阳", D: "平顶山", E: "安阳", F: "鹤壁", G: "新乡", H: "焦作", J: "濮阳", K: "许昌", L: "漯河", M: "三门峡", N: "商丘", P: "周口", Q: "驻马店", R: "南阳", S: "信阳", U: "济源" } },
    "鄂": { name: "湖北省", region: "华中", cities: { A: "武汉", B: "黄石", C: "十堰", D: "荆州", E: "宜昌", F: "襄阳", G: "鄂州", H: "荆门", J: "黄冈", K: "孝感", L: "咸宁", M: "仙桃", N: "潜江", P: "神农架", Q: "恩施", R: "天门", S: "随州" } },
    "湘": { name: "湖南省", region: "华中", cities: { A: "长沙", B: "株洲", C: "湘潭", D: "衡阳", E: "邵阳", F: "岳阳", G: "张家界", H: "益阳", J: "常德", K: "娄底", L: "郴州", M: "永州", N: "怀化", U: "湘西" } },
    "粤": { name: "广东省", region: "华南", cities: { A: "广州", B: "深圳", C: "珠海", D: "汕头", E: "佛山", F: "韶关", G: "湛江", H: "肇庆", J: "江门", K: "茂名", L: "惠州", M: "梅州", N: "汕尾", P: "河源", Q: "阳江", R: "清远", S: "东莞", T: "中山", U: "潮州", V: "揭阳", W: "云浮", X: "佛山顺德", Y: "佛山南海" } },
    "桂": { name: "广西壮族自治区", region: "华南", cities: { A: "南宁", B: "柳州", C: "桂林", D: "梧州", E: "北海", F: "崇左", G: "来宾", H: "贺州", J: "玉林", K: "贵港", L: "百色", M: "河池", N: "钦州", P: "防城港", R: "贵港(旧)" } },
    "琼": { name: "海南省", region: "华南", cities: { A: "海口", B: "三亚", C: "三沙/琼海", D: "五指山", E: "洋浦", F: "洋浦(旧)" } },
    "渝": { name: "重庆市", region: "西南", cities: { A: "市直（江南）", B: "市直（江北）", C: "市直（永川）", D: "市直", F: "市直（万州）", G: "市直（涪陵）", H: "市直（黔江）", N: "市直", P: "市直" } },
    "川": { name: "四川省", region: "西南", cities: { A: "成都", B: "绵阳", C: "自贡", D: "攀枝花", E: "泸州", F: "德阳", H: "广元", J: "遂宁", K: "内江", L: "乐山", M: "资阳", N: "宜宾", P: "南充", Q: "达州", R: "雅安", S: "阿坝", T: "甘孜", U: "凉山", V: "广安", W: "巴中", X: "眉山" } },
    "贵": { name: "贵州省", region: "西南", cities: { A: "贵阳", B: "六盘水", C: "遵义", D: "铜仁", E: "黔西南", F: "毕节", G: "安顺", H: "黔东南", J: "黔南" } },
    "云": { name: "云南省", region: "西南", cities: { A: "昆明", B: "昭通", C: "曲靖", D: "楚雄", E: "玉溪", F: "红河", G: "文山", H: "普洱", J: "西双版纳", K: "大理", L: "保山", M: "德宏", N: "丽江", P: "怒江", Q: "迪庆", R: "临沧" } },
    "藏": { name: "西藏自治区", region: "西南", cities: { A: "拉萨", B: "昌都", C: "山南", D: "日喀则", E: "那曲", F: "阿里", G: "林芝", H: "驻四川" } },
    "陕": { name: "陕西省", region: "西北", cities: { A: "西安", B: "铜川", C: "宝鸡", D: "咸阳", E: "渭南", F: "汉中", G: "安康", H: "商洛", J: "延安", K: "榆林", V: "杨凌" } },
    "甘": { name: "甘肃省", region: "西北", cities: { A: "兰州", B: "嘉峪关", C: "金昌", D: "白银", E: "天水", F: "酒泉", G: "张掖", H: "武威", J: "定西", K: "陇南", L: "平凉", M: "庆阳", N: "临夏", P: "甘南" } },
    "青": { name: "青海省", region: "西北", cities: { A: "西宁", B: "海东", C: "海北", D: "黄南", E: "海南", F: "果洛", G: "玉树", H: "海西", J: "格尔木" } },
    "宁": { name: "宁夏回族自治区", region: "西北", cities: { A: "银川", B: "石嘴山", C: "吴忠", D: "固原", E: "中卫" } },
    "新": { name: "新疆维吾尔自治区", region: "西北", cities: { A: "乌鲁木齐", B: "昌吉", C: "石河子", D: "奎屯", E: "博尔塔拉", F: "伊犁", G: "塔城", H: "阿勒泰", J: "克拉玛依", K: "吐鲁番", L: "哈密", M: "巴音郭楞", N: "阿克苏", P: "克孜勒苏", Q: "喀什", R: "和田" } }
  };

  // 省级行政区划代码 (GB/T 2260 前2位)
  const provinceNcode = {
    "京":"11","津":"12","冀":"13","晋":"14","蒙":"15",
    "辽":"21","吉":"22","黑":"23",
    "沪":"31","苏":"32","浙":"33","皖":"34","闽":"35","赣":"36","鲁":"37",
    "豫":"41","鄂":"42","湘":"43",
    "粤":"44","桂":"45","琼":"46",
    "渝":"50","川":"51","贵":"52","云":"53","藏":"54",
    "陕":"61","甘":"62","青":"63","宁":"64","新":"65"
  };

  // 地级代码映射: 字母 → 两位数编码 (按字母序: A=01, B=02 ... 跳过 I/O)
  const letterNcode = {};
  const letters = "ABCDEFGHJKLMNPQRSTUVWXY";
  for (let i = 0; i < letters.length; i++) {
    letterNcode[letters[i]] = String(i + 1).padStart(2, "0");
  }

  // 城市数字代码: cityNcode[abbr][letterCode] = "XX" (市级的2位代码)
  const cityNcode = {};
  for (const [abbr, data] of Object.entries(plateDB)) {
    cityNcode[abbr] = {};
    const sortedCodes = Object.keys(data.cities).sort();
    for (let i = 0; i < sortedCodes.length; i++) {
      cityNcode[abbr][sortedCodes[i]] = String(i + 1).padStart(2, "0");
    }
  }

  const provinceAbbrs = Object.keys(plateDB).sort((a,b) => {
    const regOrder = { "华北":1,"东北":2,"华东":3,"华中":4,"华南":5,"西南":6,"西北":7 };
    return (regOrder[plateDB[a].region]||9) - (regOrder[plateDB[b].region]||9) || a.localeCompare(b,'zh');
  });

  // 城市索引: 城市名 -> [{abbr, code, province, pcode, ncode, fullNcode}]
  const cityIndex = {};
  for (const [abbr, data] of Object.entries(plateDB)) {
    const pcode = provinceNcode[abbr] || "";
    for (const [code, city] of Object.entries(data.cities)) {
      if (!cityIndex[city]) cityIndex[city] = [];
      const ccode = (cityNcode[abbr] && cityNcode[abbr][code]) || "";
      cityIndex[city].push({ abbr, code, province: data.name, pcode, ccode, fullNcode: pcode + ccode });
    }
  }

  // 地区分类
  const regions = { "华北":[],"东北":[],"华东":[],"华中":[],"华南":[],"西南":[],"西北":[] };
  for (const abbr of provinceAbbrs) {
    const data = plateDB[abbr];
    if (regions[data.region]) regions[data.region].push(abbr);
  }

  // ============================================================
  //  校验与解析
  // ============================================================
  function parseFullPlate(raw) {
    const s = raw.replace(/\s+/g,"").replace(/[·•・]/g,"").toUpperCase();
    if (!s) return null;

    // 新能源绿牌 8 位: 省份(1) + 城市字母(1) + D/F(1) + 5 位数字
    const nePattern = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤川青藏琼宁台港澳])([A-HJ-NP-Z])([DF])(\d{5})$/;
    const neMatch = s.match(nePattern);
    if (neMatch) {
      const abbr = neMatch[1], cityCode = neMatch[2], energyType = neMatch[3], num = neMatch[4];
      if (!plateDB[abbr]) return { raw: s, type: "error", reason: "未知省份简称" };
      const cityName = plateDB[abbr].cities[cityCode] || null;
      return {
        raw: s, valid: true, type: "green",
        abbr, province: plateDB[abbr].name, cityCode, cityName,
        energyType: energyType === "D" ? "纯电动" : "非纯电动（插电混动等）",
        full: abbr+cityCode+energyType+num,
        display: abbr+cityCode+"·"+energyType+num
      };
    }

    // 传统蓝牌 7 位: 省份(1) + 城市字母(1) + 5 位字母数字
    const bluePattern = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤川青藏琼宁台港澳])([A-HJ-NP-Z])([A-HJ-NP-Z0-9]{5})$/;
    const blueMatch = s.match(bluePattern);
    if (blueMatch) {
      const abbr = blueMatch[1], cityCode = blueMatch[2], seq = blueMatch[3];
      if (!plateDB[abbr]) return { raw: s, type: "error", reason: "未知省份简称" };
      const cityName = plateDB[abbr].cities[cityCode] || null;
      return {
        raw: s, valid: true, type: "blue",
        abbr, province: plateDB[abbr].name, cityCode, cityName, seq,
        full: abbr+cityCode+seq,
        display: abbr+cityCode+"·"+seq
      };
    }

    // 特殊车牌探测
    if (/^使\d{3}[·•・]\d{3}$/.test(s) || /^使\d+$/.test(s)) {
      return { raw: s, valid: true, type: "special", special: "使馆车牌", abbr: null, province: "外国驻华使馆", cityName: "使馆车辆", display: s };
    }
    if (/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤川青藏琼宁台港澳][·•・]领\d+$/i.test(s)) {
      return { raw: s, valid: true, type: "special", special: "领事馆车牌", province: "外国驻华领事馆", cityName: "领事馆车辆", display: s };
    }
    if (/^WJ\d{2}[A-HJ-NP-Z]\d{4}$/i.test(s) || /^WJ\d{5}$/i.test(s)) {
      return { raw: s, valid: true, type: "special", special: "武警车牌", display: s };
    }
    if (/[警学试临]$/.test(s)) {
      let specialType = "";
      if (/警$/.test(s)) specialType = "警用车辆";
      else if (/学$/.test(s)) specialType = "教练车";
      else if (/试$/.test(s)) specialType = "测试车辆";
      else if (/临$/.test(s)) specialType = "临时号牌";
      return { raw: s, valid: true, type: "special", special: specialType, display: s };
    }
    if (/^[VAKHB]\s*[A-HJ-NP-Z]\d{5}$/i.test(s.replace(/\s/g,''))) {
      return { raw: s, valid: true, type: "special", special: "军车号牌", display: s };
    }

    // 部分匹配：只有省份+城市字母
    const partialPattern = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤川青藏琼宁台港澳])([A-HJ-NP-Z])$/;
    const partialMatch = s.match(partialPattern);
    if (partialMatch) {
      const abbr = partialMatch[1], cityCode = partialMatch[2];
      if (!plateDB[abbr]) return { raw: s, type: "error", reason: "未知省份简称" };
      const cityName = plateDB[abbr].cities[cityCode] || null;
      if (cityName) {
        return { raw: s, type: "partial", abbr, province: plateDB[abbr].name, cityCode, cityName, display: abbr+cityCode };
      }
      return { raw: s, type: "partial", abbr, province: plateDB[abbr].name, cityCode, cityName: null, display: abbr+cityCode };
    }

    return { raw: s, type: "error", reason: "格式不合法：请输入完整 7 位蓝牌（如京A12345）或 8 位新能源绿牌（如沪AD12345）" };
  }

  // ============================================================
  //  渲染工具
  // ============================================================
  function getPlateBadgeClass(type) {
    if (type === "green") return "green";
    if (type === "blue") return "blue";
    if (type === "yellow") return "yellow";
    if (type === "white") return "white";
    if (type === "black" || type === "special") return "black";
    return "default";
  }

  function renderSingleResult(parsed) {
    if (!parsed) return '<div class="empty-state">请输入车牌号</div>';
    if (parsed.type === "error") {
      return `<div class="result-item">
        <span class="plate-badge default">${escHtml(parsed.raw)}</span>
        <div class="result-info"><span style="color:var(--danger)">${escHtml(parsed.reason)}</span></div>
        <span class="result-status invalid">无效</span>
      </div>`;
    }
    let location = "";
    if (parsed.special) {
      location = parsed.special;
    } else if (parsed.cityName) {
      location = parsed.province + " — " + parsed.cityName;
    } else {
      location = parsed.province + (parsed.cityCode ? " (城市代码 " + parsed.cityCode + " 未收录)" : "");
    }
    let meta = "";
    if (parsed.type === "green") meta = "新能源 · " + parsed.energyType;
    else if (parsed.type === "blue") meta = "蓝牌 · 序号: " + (parsed.seq || "");
    else if (parsed.special) meta = "特殊号牌";
    // 添加数字代码
    if (parsed.abbr && parsed.cityCode && provinceNcode[parsed.abbr]) {
      const pcode = provinceNcode[parsed.abbr];
      const ccode = (cityNcode[parsed.abbr] && cityNcode[parsed.abbr][parsed.cityCode]) || "";
      if (ccode) {
        meta = (meta ? meta + "　" : "") + "省级代码：" + pcode + "　地级代码：" + ccode + "　城市代码：" + pcode + ccode;
      }
    }

    return `<div class="result-item">
      <span class="plate-badge ${getPlateBadgeClass(parsed.type)}">${escHtml(parsed.display || parsed.raw)}</span>
      <div class="result-info">
        <div class="location">${escHtml(location)}</div>
        ${meta ? '<div class="meta">'+escHtml(meta)+'</div>' : ''}
      </div>
      <span class="result-status valid">有效</span>
    </div>`;
  }

  function escHtml(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  }

  // ============================================================
  //  城市查询 (城市 → 车牌代码)
  // ============================================================
  document.getElementById("reverseSearch").addEventListener("click", () => {
    const val = document.getElementById("reverseInput").value.trim();
    const container = document.getElementById("reverseResult");
    if (!val) { container.innerHTML = ""; return; }
    const results = cityIndex[val];
    if (!results) {
      // 模糊匹配
      let found = [];
      for (const [city, entries] of Object.entries(cityIndex)) {
        if (city.includes(val)) found.push(...entries.map(e => ({ ...e, city })));
      }
      if (!found.length) {
        container.innerHTML = `<div class="empty-state">未找到"${escHtml(val)}"对应的车牌信息，请尝试全称（如"杭州"）</div>`;
        return;
      }
      let html = `<div class="card-header" style="margin-bottom:10px">"${escHtml(val)}" 的模糊匹配结果：</div>`;
      for (const e of found) {
        html += `<div class="result-item">
          <span class="plate-badge blue">${escHtml(e.abbr+e.code)}</span>
          <div class="result-info">
            <div class="location">${escHtml(e.province)} — ${escHtml(e.city)}</div>
            <div class="meta">省级代码：${escHtml(e.pcode)}　地级代码：${escHtml(e.ccode)}　城市代码：${escHtml(e.fullNcode)}</div>
          </div>
        </div>`;
      }
      container.innerHTML = html;
      return;
    }
    let html = `<div class="card-header" style="margin-bottom:10px">"${escHtml(val)}" 的车牌代码（${results.length} 个）：</div>`;
    for (const e of results) {
      html += `<div class="result-item">
        <span class="plate-badge blue">${escHtml(e.abbr+e.code)}</span>
        <div class="result-info">
          <div class="location">${escHtml(e.province)} — ${escHtml(val)}</div>
          <div class="meta">省级代码：${escHtml(e.pcode)}　地级代码：${escHtml(e.ccode)}　城市代码：${escHtml(e.fullNcode)}</div>
        </div>
      </div>`;
    }
    container.innerHTML = html;
  });
  document.getElementById("reverseInput").addEventListener("keydown", e => {
    if (e.key === "Enter") document.getElementById("reverseSearch").click();
  });

  // ============================================================
  //  批量查询
  // ============================================================
  document.getElementById("batchSearch").addEventListener("click", () => {
    const raw = document.getElementById("batchInput").value.trim();
    const container = document.getElementById("batchResult");
    if (!raw) { container.innerHTML = ""; return; }
    const lines = raw.split(/[\n\r]+/).map(l => l.trim()).filter(Boolean);
    if (!lines.length) { container.innerHTML = '<div class="empty-state">请输入有效的车牌号</div>'; return; }
    let html = `<div class="card-header" style="margin-bottom:10px">共查询 ${lines.length} 个车牌：</div>`;
    for (const line of lines) {
      html += renderSingleResult(parseFullPlate(line));
    }
    container.innerHTML = html;
  });

  // ============================================================
  //  地区分类
  // ============================================================
  (function renderRegions() {
    const container = document.getElementById("regionContent");
    const regionNames = { "华北":"华北", "东北":"东北", "华东":"华东", "华中":"华中", "华南":"华南", "西南":"西南", "西北":"西北" };
    let html = "";
    for (const [region, abbrs] of Object.entries(regions)) {
      if (!abbrs.length) continue;
      html += `<div class="region-group">
        <button class="region-header" data-region="${region}">
          <span>${regionNames[region]}（${abbrs.length} 个省区市）</span>
          <span class="arrow">&#9654;</span>
        </button>
        <div class="region-body" id="regionBody_${region}">`;
      for (const abbr of abbrs) {
        const data = plateDB[abbr];
        const sortedCodes = Object.keys(data.cities).sort();
        html += `<div style="margin-bottom:10px"><strong>${abbr} ${data.name}（省级代码：${provinceNcode[abbr]||""}）</strong></div><div style="margin-bottom:8px">`;
        for (const code of sortedCodes) {
          const ncode = (cityNcode[abbr] && cityNcode[abbr][code]) ? provinceNcode[abbr] + cityNcode[abbr][code] : "";
          html += `<span class="region-city-link" data-abbr="${abbr}" data-code="${code}" title="城市代码：${ncode}">${abbr}${code}</span>`;
        }
        html += `</div>`;
      }
      html += `</div></div>`;
    }
    container.innerHTML = html;

    // 点击展开/折叠
    container.addEventListener("click", e => {
      const header = e.target.closest(".region-header");
      if (header) {
        header.classList.toggle("open");
        const region = header.dataset.region;
        const body = document.getElementById("regionBody_" + region);
        if (body) body.classList.toggle("open");
      }
      // 点击城市链接 → 切换到城市查询
      const link = e.target.closest(".region-city-link");
      if (link) {
        const abbr = link.dataset.abbr, code = link.dataset.code;
        const cityName = plateDB[abbr]?.cities[code];
        if (cityName) {
          document.getElementById("reverseInput").value = cityName;
          switchTab("reverse");
          document.getElementById("reverseSearch").click();
        }
      }
    });
  })();

  // ============================================================
  //  页签切换
  // ============================================================
  function switchTab(tabName) {
    document.querySelectorAll(".tab-nav button").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    const btn = document.querySelector(`.tab-nav button[data-tab="${tabName}"]`);
    if (btn) btn.classList.add("active");
    const panel = document.getElementById("tab-" + tabName);
    if (panel) panel.classList.add("active");
  }

  document.querySelectorAll(".tab-nav button").forEach(btn => {
    btn.addEventListener("click", () => {
      switchTab(btn.dataset.tab);
    });
  });

  // ============================================================
  //  深色/浅色模式手动切换
  // ============================================================
  const themeToggle = document.getElementById("themeToggle");
  const body = document.body;

  // 初始化：从 localStorage 读取，默认浅色
  const savedTheme = localStorage.getItem("plate-theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    themeToggle.innerHTML = "&#9790;"; // 月亮图标
  } else {
    body.classList.remove("dark");
    themeToggle.innerHTML = "&#9788;"; // 太阳图标
  }

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      localStorage.setItem("plate-theme", "light");
      themeToggle.innerHTML = "&#9788;";
    } else {
      body.classList.add("dark");
      localStorage.setItem("plate-theme", "dark");
      themeToggle.innerHTML = "&#9790;";
    }
  });

