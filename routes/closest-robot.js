// https://localhost:5001/api/robots/closest/

// API receives:
// {
//    loadId: 231, -->Arbitrary ID of the load which needs to be moved.
//    x: 5, -->Current x coordinate of the load which needs to be moved.
//    y: 3 -->Current y coordinate of the load which needs to be moved.
// }

// API response:
//{
//    robotId: 58,
//    distanceToGoal: 49.9, -->Indicates how far the robot is from the load which needs to be moved.
//    batteryLevel: 30 -->Indicates current battery level of the robot.
//}
