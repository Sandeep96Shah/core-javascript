let isInvoked = false;

const originalFn = () => {
    isInvoked = true;
}

const enhancedFnc = () => {
    let counter = 0;
    return () => {
        counter++;
        if(counter % 3 === 0){
            console.log("Hello");
        }
        return originalFn(arguments);
    }
}

const fn = enhancedFnc();
fn();
fn();
fn();
fn();