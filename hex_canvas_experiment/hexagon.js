/*
 * fillHex
 * Draw a hexagon given the x,y coordinates and size.
 * Optional arguments to set fill and border colors
 *
 * Inputs:
 *   ctx         an html canvas context
 *   Xcenter     int, location for x center of the hexagon on the canvas
 *   Ycenter     int, location for y center of the hexagon on the canvas
 *   size        int, the length of one side of the hexagon
 *   strokeType  string, the color to draw the border
 *   fillStype   string, the color to fill the area of the hexagon
 *   lineWidth   string, an integer representing the width of the border in pixels
 */
function fillHex(ctx, Xcenter, Ycenter, size,
      fillStyle = "ffffff", lineWidth = "1", strokeType = "000000") {
  ctx.lineWidth = lineWidth;
  ctx.fillStyle = fillStyle;
  ctx.strokeType = strokeType;

  var numberOfSides = 6;
  
  ctx.beginPath();

  ctx.moveTo(Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));
  for (var i = 1; i <= numberOfSides; i += 1) {
    ctx.lineTo(
      Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides),
      Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides)
    );
  }

  ctx.stroke();
  ctx.fill();
}


function drawHexSide(ctx, Xcenter, Ycenter, size, side) {
    var A = size/2
    var B = Math.sqrt(3)/2 * size

    function draw_side(x1, y1, x2, y2) {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
    }

    ctx.beginPath();

    switch(side) {
        case "N":
            draw_side(Xcenter - A, Ycenter - B, Xcenter + A, Ycenter - B);
            break;
        case "S":
            draw_side(Xcenter - A, Ycenter + B, Xcenter + A, Ycenter + B);
            break;
        case "NW":
            draw_side(Xcenter - 2*A, Ycenter, Xcenter - A, Ycenter - B);
            break;
        case "SW":
            draw_side(Xcenter - 2*A, Ycenter, Xcenter - A, Ycenter + B);
            break;
        case "NE":
            draw_side(Xcenter + 2*A, Ycenter, Xcenter + A, Ycenter - B);
            break;
        case "SE":
            draw_side(Xcenter + 2*A, Ycenter, Xcenter + A, Ycenter + B);
            break;
        default:
            console.log("default");
            break;

    }
  ctx.stroke();
  ctx.fill();
}


