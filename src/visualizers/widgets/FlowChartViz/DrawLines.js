

function Arrow(x1, y1, x2, y2, Arrow_Type, Hex_Color, L_Width, Element_ID) {
    var c = document.getElementById(Element_ID);
    var ctx = c.getContext("2d");

//SOHCAHTOA = SOH ( Sin(Radians) = Opposite / Hypotenuse ) - CAH ( Cos(Radians) = Adjacent / Hypotenuse ) - TOA ( Tan(Radians) = Opposite / Adjacent

//Set-Points for Arrow Head
    var A_start = 10;
    var O_start = 3.75;
    var H_start = Math.sqrt(Math.pow(A_start, 2) + Math.pow(O_start, 2));
    var change_arrow_radians = Math.atan2(O_start, A_start);

//Calculate the change of the arrow head (i.e. horizontal, vertical or diagonal)

    var change_x_main = Math.abs(x1 - x2); //Adjacent, Calculate difference as an absolute value
    var change_y_main = Math.abs(y1 - y2); //Opposite, Calculate difference as an absolute value

    var change_angle_radians = Math.atan2(change_y_main, change_x_main);
    var change_angle_degrees = change_angle_radians * ( 180 / Math.PI); //Not Used, but could be used as below to confirm angle of arrow head

//alert("Angle of Arrow: " + change_angle_degrees); //remove comment

    var change_x_0_arrowhead = Math.cos(change_angle_radians + change_arrow_radians) * H_start;
    var change_y_0_arrowhead = Math.sin(change_angle_radians + change_arrow_radians) * H_start;
    var change_x_1_arrowhead = Math.cos(change_angle_radians - change_arrow_radians) * H_start;
    var change_y_1_arrowhead = Math.sin(change_angle_radians - change_arrow_radians) * H_start;



//draw arrow

    ctx.beginPath();
    ctx.lineWidth = L_Width;
    ctx.strokeStyle = Hex_Color;

//Determines type of arrow
    if (Arrow_Type == true) { //To the inside of the circle
        if (((x1 < x2) && (y1 > y2)) || ((x1 == x2) && (y1 > y2))) {
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);

            ctx.moveTo(x1 + change_x_0_arrowhead, y1 - change_y_0_arrowhead);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x1 + change_x_1_arrowhead, y1 - change_y_1_arrowhead);

        } else if ((x1 > x2) && (y1 > y2)) {
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);

            ctx.moveTo(x1 - change_x_0_arrowhead, y1 - change_y_0_arrowhead);
            ctx.lineTo(x1, y1);       
            ctx.lineTo(x1 - change_x_1_arrowhead, y1 - change_y_1_arrowhead);

        } else if (((x1 < x2) && (y1 < y2)) || ((x1 < x2) && (y1 == y2))) {
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);

            ctx.moveTo(x1 + change_x_0_arrowhead, y1 + change_y_0_arrowhead);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x1 + change_x_1_arrowhead, y1 + change_y_1_arrowhead);

        } else if (((x1 > x2) && (y1 < y2)) || ((x1 > x2) && (y1 == y2)) || ((x1 == x2) && (y1 < y2))) {
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);

            ctx.moveTo(x1 - change_x_0_arrowhead, y1 + change_y_0_arrowhead);
            ctx.lineTo(x1, y1);
            ctx.lineTo(x1 - change_x_1_arrowhead, y1 + change_y_1_arrowhead);                                                 
                
        } 

    } else { //To the outside of the circle
        if (((x1 < x2) && (y1 > y2)) || ((x1 < x2) && (y1 == y2)) || ((x1 == x2) && (y1 > y2))) {
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);

            ctx.moveTo(x2 - change_x_0_arrowhead, y2 + change_y_0_arrowhead);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x2 - change_x_1_arrowhead, y2 + change_y_1_arrowhead);

        } else if (((x1 > x2) && (y1 > y2)) || ((x1 > x2) && (y1 == y2))) {
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);

            ctx.moveTo(x2 + change_x_0_arrowhead, y2 + change_y_0_arrowhead);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x2 + change_x_1_arrowhead, y2 + change_y_1_arrowhead);
        } else if ((x1 < x2) && (y1 < y2)) {
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);

            ctx.moveTo(x2 - change_x_0_arrowhead, y2 - change_y_0_arrowhead);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x2 - change_x_1_arrowhead, y2 - change_y_1_arrowhead);

        } else if (((x1 > x2) && (y1 < y2)) || ((x1 == x2) && (y1 < y2))) {
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);

            ctx.moveTo(x2 + change_x_0_arrowhead, y2 - change_y_0_arrowhead);
            ctx.lineTo(x2, y2);
            ctx.lineTo(x2 + change_x_1_arrowhead, y2 - change_y_1_arrowhead);

        }

    }

    ctx.stroke();

}

function drawArrow(x1, y1, x2, y2, Arrow_Type, Hex_Color, L_Width, Element_ID) {
    var c = document.getElementById(Element_ID);
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = L_Width;
    ctx.strokeStyle = Hex_Color;

    var arrowSize = 3;

    if (y2 - y1 > 80) {
        ctx.moveTo(x1, y1 + 30);
        ctx.lineTo(x1, (y1 + y2) / 2);
        ctx.lineTo(x2, (y1 + y2) / 2);
        ctx.lineTo(x2, y2 - 30);

        ctx.moveTo(x2 - arrowSize, y2 - 30 - arrowSize);
        ctx.lineTo(x2, y2 - 30);
        ctx.lineTo(x2 + arrowSize, y2 - 30 - arrowSize);
    }
    else if (x2 - x1 > 140) {
        ctx.moveTo(x1 + 60, y1);
        ctx.lineTo((x1 + x2)/2, y1);
        ctx.lineTo((x1 + x2)/2, y2)
        ctx.lineTo(x2 - 60, y2);

        ctx.moveTo(x2 - 60 - arrowSize, y2 - arrowSize);
        ctx.lineTo(x2 - 60, y2);
        ctx.lineTo(x2 - 60 - arrowSize, y2 + arrowSize);
    }
    else if (x1 - x2 > 140) {
        ctx.moveTo(x1 - 60, y1);
        ctx.lineTo((x1 + x2)/2, y1);
        ctx.lineTo((x1 + x1)/2, y2);
        ctx.lineTo(x2 + 60, y2);

        ctx.moveTo(x2 + 60 + arrowSize, y2 - arrowSize);
        ctx.lineTo(x2 + 60, y2);
        ctx.lineTo(x2 + 60 + arrowSize, y2 + arrowSize);
    }

    // ctx.moveTo(x1, y1);
    // ctx.lineTo(x1, y2);
    // ctx.lineTo(x2, y2);

    ctx.stroke();
}