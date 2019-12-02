// interface ParamsType {
//     time?: number;
//     // TODO: add arg types passed to callback (callback.call(this, ...args))
//     callback: () => void;
// }

// export default function debounce(params: ParamsType) {
//     const { callback, time = 500 } = params;

//     let timer: any;
//     return function debounced(...args: any) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             callback.call(this, ...args);
//         }, time);
//     };
// }
