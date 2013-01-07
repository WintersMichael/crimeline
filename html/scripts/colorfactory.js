function ColorFactory() {
	/* http://phrogz.net/css/distinct-colors.html */

	var colors = [
	"#ff0000", "#ffc480", "#7ee639", "#0091d9", "#9100d9", "#990000", "#a67f53", "#5ba629", "#297ca6", "#602080",
	"#7f2020", "#f2d6b6", "#aaf279", "#6cb5d9", "#8d29a6", "#a65353", "#a6927c", "#488040", "#acd2e6", "#b866cc",
	"#e6acac", "#ffaa00", "#8cb386", "#0074d9", "#734080", "#806060", "#a66f00", "#00a600", "#005299", "#ca00d9",
	"#cc1b00", "#d9a336", "#008000", "#296ca6", "#b086b3", "#d94c36", "#d9b56c", "#79f289", "#73b0e6", "#f279ea",
	"#a63a29", "#7f6a40", "#00e63d", "#406280", "#f2b6ee", "#ff9180", "#ffcc00", "#ace6bb", "#869eb3", "#ff00cc",
	"#7f4840", "#7f6600", "#00a642", "#607180", "#99007a", "#a6827c", "#b2982d", "#60806c", "#0066ff", "#cc33ad",
	"#ff4400", "#ffe680", "#00ff88", "#79aaf2", "#a65395", "#a62c00", "#a69553", "#36d98d", "#003ad9", "#d90091",
	"#d96236", "#f2e6b6", "#408062", "#002280", "#80406a", "#8c3f23", "#b3aa86", "#00a66f", "#335ccc", "#806075",
	"#ffa280", "#807960", "#73e6bf", "#233f8c", "#d90074", "#a66953", "#d9ce36", "#ace6d2", "#acbbe6", "#a6296c",
	"#e6bbac", "#e2f200", "#00ffcc", "#0022ff", "#f279ba", "#ff6600", "#9ba600", "#29a68d", "#293aa6", "#b3869e",
	"#bf4d00", "#778000", "#86b3aa", "#7382e6", "#d90057", "#7f3300", "#a0a653", "#00e6d6", "#535ea6", "#a60042",
	"#d97736", "#b8d936", "#008077", "#868cb3", "#7f2046", "#a65b29", "#c3d96c", "#66ccc5", "#0000a6", "#f2b6ce",
	"#ffb380", "#aab386", "#00d6e6", "#110080", "#d9003a", "#a67453", "#aaff00", "#299da6", "#7340ff", "#a65369",
	"#f2ceb6", "#558000", "#407b80", "#bbace6", "#e5001f", "#806c60", "#6a8040", "#ace2e6", "#73698c", "#b22d3e",
	"#ff8800", "#def2b6", "#00ccff", "#5200cc", "#e57382", "#bf6600", "#758060", "#298da6", "#5b29a6", "#7f4048",
	"#d98d36", "#7fa653", "#73cfe6", "#aa79f2", "#b3868c", "#996326", "#66ff00", "#86aab3", "#7453a6"
	];
	
	var i = 0;
	
	this.getColor = function() {
		if (i > colors.length) {
			i = 0;
		}
		var color = colors[i];
		i++;
		return color;
	};
}

