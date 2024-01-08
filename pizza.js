let topping = "Tomatoes";

switch(topping) {
    case "Mushrooms":
    case "Cheese":
        console.log(`These are important ingredients for my pizza`)
        break;
    case "Tomatoes":
        console.log(`I don't mind having ${topping} on my pizza`)
        break;
    default:
        console.log(`${topping} should not be on a pizza`)
}