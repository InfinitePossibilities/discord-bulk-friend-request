var addFriendInput = document.getElementsByClassName("addFriendInputWrapper-3PjsbB")[0];
var friendInputHelperClone = addFriendInput.children[1].cloneNode(true);

var current = 0;
var iteration = 0;
var maxIterations = 1000;
var failedRequests = 0;

var friend = "Madi";

var timeInterval = 15 * 1000;

function stats() {
	return {
		current: current,
		iteration: iteration,
		maxIterations: maxIterations,
		failedRequests: failedRequests,
		targetFriend: friend,
		timeInterval: timeInterval
	};
}

var interval = setInterval(() => {
	current = iteration;
        (() => {
            var friendInput = document.getElementsByClassName("addFriendInputWrapper-3PjsbB")[0];
            var friendInputHelper = document.getElementsByClassName("addFriendInputWrapper-3PjsbB")[0].getElementsByClassName("addFriendHint-3Y70FX")[0];
            let focusLock = document.getElementsByClassName("focusLock-Ns3yie")[0];

            if (!friendInput) {
                alert("Stopping! Please make sure you are in the Friends section!");
                clearInterval(interval);
                return;
            }
            
            if (focusLock) {
                if (focusLock.ariaLabel == "Friend request failed") {
                    focusLock.getElementsByClassName("primaryButton-2BsGPp")[0].click();
                    failedRequests++
                }
                if (!focusLock.ariaLabel == "Friend request failed") {
                    console.log("An unhandled focusLock popup has occured! Stopping.");
                    clearInterval(interval);
                    return;
                }
            }
            
            if (iteration < 10) {
                current = "000" + iteration;
                if (!friendInputHelper) {
                    friendInput.insertBefore(friendInputHelperClone, friendInput.children[1]);
                }

                friendInput.children[0].value = String(friend + "#" + current);
                friendInput.children[1].value = String(friend + "#" + current);
                friendInput.children[2].disabled = false;
                friendInput.children[2].click();

                console.log(current);
                return;
            }
            if (iteration < 100) {
                current = "00" + iteration;
                if (!friendInputHelper) {
                    friendInput.insertBefore(friendInputHelperClone, friendInput.children[1]);
                }

                friendInput.children[0].value = String(friend + "#" + current);
                friendInput.children[1].value = String(friend + "#" + current);
                friendInput.children[2].disabled = false;
                friendInput.children[2].click();

                console.log(current);
                return;
            }
            if (iteration < 1000) {
                current = "0" + iteration;
                if (!friendInputHelper) {
                    friendInput.insertBefore(friendInputHelperClone, friendInput.children[1]);
                }

                friendInput.children[0].value = String(friend + "#" + current);
                friendInput.children[1].value = String(friend + "#" + current);
                friendInput.children[2].disabled = false;
                friendInput.children[2].click();

                console.log(current);
                return;
            }
            if (iteration < 10000) {
                if (!friendInputHelper) {
                    friendInput.insertBefore(friendInputHelperClone, friendInput.children[1]);
                }

                friendInput.children[0].value = String(friend + "#" + current);
                friendInput.children[1].value = String(friend + "#" + current);
                friendInput.children[2].disabled = false;
                friendInput.children[2].click();

                console.log(current);
                return;
            }
        })()
	
	if (iteration == maxIterations) {
		clearInterval(interval);
		console.log("Finished!", stats());
	}
	iteration++
}, timeInterval)
