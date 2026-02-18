## Closure (Core JS Concept)
A closure is when a function remembers variables from its outer scope even after outer function finished executing.

```js
    function createBankAccount(initialBalance) {
    let balance = initialBalance; // private

    return {
        deposit(amount) {
        balance += amount;
        console.log("Balance:", balance);
        },
        withdraw(amount) {
        balance -= amount;
        console.log("Balance:", balance);
        }
    };
    }

    const account = createBankAccount(1000);
    account.deposit(500);   // 1500
    account.withdraw(200);  // 1300
```

--------------------------------------------------------------------------------------------

## Debouncing
Debouncing is a technique used to ensure that a function is not called too frequently. It is commonly used in scenarios where events are triggered rapidly, such as typing in an input field or resizing a window.

```js
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

//Usage
function searchAPI(text) {
  console.log("API called with:", text);
}

const debouncedSearch = debounce(searchAPI, 500);

// simulate typing
debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hey");
// Only this runs after 500ms
```

--------------------------------------------------------------------------------------------

## Throttling
Throttling is a technique used to limit the number of times a function can be executed in a given time frame. It’s extremely useful when dealing with performance-heavy operations, such as resizing the window or scrolling events

```js
function throttle(fn, limit) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) return;

    fn.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, limit);
  };
}

//usage
function onScroll() {
  console.log("Scroll event");
}

const throttledScroll = throttle(onScroll, 1000);
window.addEventListener("scroll", throttledScroll);
```

--------------------------------------------------------------------------------------------

##

```js

```

--------------------------------------------------------------------------------------------

##

```js

```

--------------------------------------------------------------------------------------------
