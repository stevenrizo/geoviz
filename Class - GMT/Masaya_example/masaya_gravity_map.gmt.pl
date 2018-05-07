

#$in = "NLBM_conduit.F.wgs84z12.utm";
$in = "masaya.utm";
$out = "masaya_gravity.eps";
#masaya.utm: N = 635	<568484/611544>	<1287512/1362190>	<-314/870>
$west = 580000;
$east = 605000;
$south = 1310000;
$north = 1340000;

$color_file = "haxby";
$min_value = -300;
$max_value = 500;
$cint = 100;

# grdcontour
$anot_int = 200;
$contours = 25;

# psscale
$xpos = 16.5;
$ypos = 8.4;
$len = 8;
$width = .25;
$orient = "v";
$scale_anot_int = 50;

system "gmt surface $in -I200 -Gsurf.grd -R$west/$east/$south/$north -V";
system "gmt makecpt -C$color_file -T$min_value/$max_value/$cint -V > map.cpt";

#system "psmask $in_file -I8 -X3 -Jx.035 -Ba100f25:'Easting (m)':/a100f25:'Northing (m)':/WSne -R -K > $out_file";
system "gmt grdimage surf.grd -Jx1:200000 -Cmap.cpt -Ba5000f5000:'Easting (m)':/a5000f5000:'Northing (m)':/WSne -K -V > $out";
system "gmt grdcontour surf.grd -R -Jx -C$contours -W1p,100 -O -K >> $out";
system "gmt psxy  $in -R -Jx -Sc0.1 -W1p -V -O -K >> $out";

#system "psmask -C -O -K >> $out_file";
system "gmt psscale -D$xpos/$ypos/$len/$width$orient -Cmap.cpt -B$scale_anot_int:'Bouguer Anomaly':/:mgal: -O -V >> $out";
#system "rm map.cpt surf.grd";
system "gmt ps2raster $out -A -P -Tg";
system "rm $out";

