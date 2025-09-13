//What Are #timeoutSettings and #channel?
// These are private fields in Playwright’s internal classes 
// (like Page, Frame, Locator, etc.) that manage:
//#timeoutSettings: Controls default timeouts 
// for actions like click, waitForSelector, etc.
//#timeoutSettings: Controls default timeouts 
// for actions like click, waitForSelector, etc.
class Page {
  #timeoutSettings;
  #channel;

  constructor(channel, timeoutSettings) {
    this.#channel = channel;
    this.#timeoutSettings = timeoutSettings;
  }

  async click(selector) {
    await this.#channel.send('click', { selector, timeout: this.#timeoutSettings.timeout() });
  }
}
