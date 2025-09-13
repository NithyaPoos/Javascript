try {
  // risky code
  let result = riskyFunction();
} catch (error) {
  console.error("Caught error:", error.message);
}

//2. try...catch...finally-finally runs no matter what—great for cleanup, closing sessions, or resetting state.
try {
  performTestStep();
} catch (e) {
  console.warn("Step failed:", e);
} finally {
  console.log("Cleanup always runs");
}

//catch Without Error Variable (ES2019+)
try {
  doSomething();
} catch {
  console.log("Something went wrong");
}

//. Nested try...catch-Useful when different blocks need separate error handling logic.
try {
        try {
            riskyInnerStep();
        } catch (innerError) {
            console.log("Inner error:", innerError);
        }
  riskyOuterStep();
} catch (outerError) {
  console.log("Outer error:", outerError);
}

//Async/Await with try...catch
async function runTest() {
  try {
    const response = await fetchData();
    console.log("Data:", response);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}
//6. Throwing Custom Errors-Use throw to enforce rules and trigger controlled failures.
function validate(input) {
  if (!input) throw new Error("Input is required");
}

try {
  validate("");
} catch (e) {
  console.log("Validation error:", e.message);
}

//Using try...catch in Event Handlers
document.querySelector("button").addEventListener("click", () => {
  try {
    runAction();
  } catch (e) {
    alert("Action failed: " + e.message);
  }
});


