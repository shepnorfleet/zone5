import { Zone5 } from 'core/Zone5';
import { Zone5Config } from 'core/Zone5Config';

namespace DefaultCallbacks {
    export function doBeforeStart(this: Zone5) {
        console.log('Preparing to launch, standby...');
    }

    export function doAfterStart(this: Zone5) {
        console.log(`Zone5 is listening on ${this.config.listenPort}`);
    }

    export function doBeforeStop(this: Zone5) {
        console.log('Zone5 is preparing to stop, standby...');
    }

    export function doAfterStop(this: Zone5, err?: Error) {
        if (err) {
            console.error('Zone5 has stopped with an error condition', err);
        } else {
            console.log('Zone5 has stopped.');
        }
    }
}

const getDoBeforeStartCallback = (
    config: Zone5Config
): ((this: Zone5) => void) => {
    let rVal = config.callbacks?.doBeforeStart;

    if (!rVal) {
        rVal = DefaultCallbacks.doBeforeStart;
    }

    return rVal;
};

const getDoAfterStartCallback = (
    config: Zone5Config
): ((this: Zone5) => void) => {
    let rVal = config.callbacks?.doAfterStart;

    if (!rVal) {
        rVal = DefaultCallbacks.doAfterStart;
    }

    return rVal;
};

const getDoBeforeStopCallback = (
    config: Zone5Config
): ((this: Zone5) => void) => {
    let rVal = config.callbacks?.doBeforeStop;

    if (!rVal) {
        rVal = DefaultCallbacks.doBeforeStop;
    }

    return rVal;
};

const getDoAfterStopCallback = (
    config: Zone5Config
): ((this: Zone5, err?: Error) => void) => {
    let rVal = config.callbacks?.doAfterStop;

    if (!rVal) {
        rVal = DefaultCallbacks.doAfterStop;
    }

    return rVal;
};

export {
    getDoBeforeStartCallback,
    getDoAfterStartCallback,
    getDoBeforeStopCallback,
    getDoAfterStopCallback,
};
