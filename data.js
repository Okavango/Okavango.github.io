var nodes = new vis.DataSet([
    { id: 0, label: "*0:1"},
		{ id: 1, label: "1:0.9999999998374176"},
		{ id: 2, label: "2:0.9999999999563409"},
		{ id: 3, label: "3:0.9999999999849662"},
		{ id: 4, label: "4:0.9999999999168259"},
		{ id: 5, label: "5:0.9999999999079899"},
		{ id: 6, label: "6:1.0000000001688887"},
		{ id: 7, label: "7:1.000000000050974"},
		{ id: 8, label: "8:0.9999999998276426"},
		{ id: 9, label: "9:0.9999999999115143"},
		{ id: 10, label: "10:0.9999999999173859"},
		{ id: 11, label: "11:0.9999999999857307"},
		{ id: 12, label: "12:0.9999999999898239"},
		{ id: 13, label: "13:1.0000000000617082"},
		{ id: 14, label: "14:0.9999999999990001"},
		{ id: 15, label: "15:0.9999999999714073"},
		{ id: 16, label: "16:1.0000000001566445"},
		{ id: 17, label: "17:1.0000000001536118"},
		{ id: 18, label: "18:0.9999999997381647"},
		{ id: 19, label: "19:0.9999999999167508"}
  ]);
var edges = new vis.DataSet([
    { from: 0, to: 3, color: "red"},
		{ from: 11, to: 0, color: "red"},
		{ from: 11, to: 0, color: "red"},
		{ from: 0, to: 11, color: "red"},
		{ from: 0, to: 13, color: "red"},
		{ from: 14, to: 0, color: "red"},
		{ from: 7, to: 1, color: "red"},
		{ from: 9, to: 1, color: "red"},
		{ from: 1, to: 10, color: "red"},
		{ from: 12, to: 1, color: "red"},
		{ from: 1, to: 15, color: "red"},
		{ from: 3, to: 2, color: "red"},
		{ from: 4, to: 2, color: "red"},
		{ from: 4, to: 2, color: "red"},
		{ from: 16, to: 2, color: "red"},
		{ from: 16, to: 2, color: "red"},
		{ from: 3, to: 9, color: "red"},
		{ from: 3, to: 10, color: "red"},
		{ from: 11, to: 3, color: "red"},
		{ from: 12, to: 3, color: "red"},
		{ from: 12, to: 3, color: "red"},
		{ from: 3, to: 19, color: "red"},
		{ from: 19, to: 3, color: "red"},
		{ from: 19, to: 3, color: "red"},
		{ from: 5, to: 4, color: "red"},
		{ from: 4, to: 6, color: "red"},
		{ from: 9, to: 4, color: "red"},
		{ from: 4, to: 9, color: "red"},
		{ from: 4, to: 10, color: "red"},
		{ from: 14, to: 4, color: "red"},
		{ from: 17, to: 4, color: "red"},
		{ from: 18, to: 4, color: "red"},
		{ from: 5, to: 8, color: "red"},
		{ from: 5, to: 10, color: "red"},
		{ from: 5, to: 16, color: "red"},
		{ from: 5, to: 16, color: "red"},
		{ from: 16, to: 5, color: "red"},
		{ from: 18, to: 5, color: "red"},
		{ from: 5, to: 18, color: "red"},
		{ from: 7, to: 6, color: "red"},
		{ from: 9, to: 6, color: "red"},
		{ from: 12, to: 6, color: "red"},
		{ from: 6, to: 14, color: "red"},
		{ from: 6, to: 15, color: "red"},
		{ from: 6, to: 15, color: "red"},
		{ from: 15, to: 6, color: "red"},
		{ from: 6, to: 15, color: "red"},
		{ from: 16, to: 6, color: "red"},
		{ from: 7, to: 11, color: "red"},
		{ from: 7, to: 13, color: "red"},
		{ from: 13, to: 7, color: "red"},
		{ from: 14, to: 7, color: "red"},
		{ from: 7, to: 15, color: "red"},
		{ from: 7, to: 18, color: "red"},
		{ from: 7, to: 19, color: "red"},
		{ from: 19, to: 7, color: "red"},
		{ from: 19, to: 7, color: "red"},
		{ from: 16, to: 8, color: "red"},
		{ from: 8, to: 18, color: "red"},
		{ from: 8, to: 18, color: "red"},
		{ from: 9, to: 18, color: "red"},
		{ from: 19, to: 9, color: "red"},
		{ from: 12, to: 10, color: "red"},
		{ from: 19, to: 10, color: "red"},
		{ from: 11, to: 13, color: "red"},
		{ from: 11, to: 15, color: "red"},
		{ from: 11, to: 16, color: "red"},
		{ from: 15, to: 12, color: "red"},
		{ from: 14, to: 13, color: "red"},
		{ from: 14, to: 13, color: "red"},
		{ from: 15, to: 13, color: "red"},
		{ from: 14, to: 15, color: "red"},
		{ from: 14, to: 16, color: "red"},
		{ from: 16, to: 14, color: "red"},
		{ from: 19, to: 14, color: "red"},
		{ from: 14, to: 19, color: "red"},
		{ from: 16, to: 15, color: "red"},
		{ from: 15, to: 16, color: "red"},
		{ from: 16, to: 15, color: "red"},
		{ from: 15, to: 19, color: "red"},
		{ from: 17, to: 16, color: "red"},
		{ from: 18, to: 16, color: "red"},
		{ from: 18, to: 19, color: "red"},
		{ from: 19, to: 18, color: "red"}
  ]);
var data = {
      nodes: nodes,
      edges: edges,
  };
