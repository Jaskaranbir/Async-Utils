Async-Utils
===========

A set of utilities/modules that make handling javascript Promises (including caching) convenient. Features/functions:

 * **Streamline API calls**: Keeps track of all api calls made through utility. This means that when sending multiple requests to same endpoint on same page, only one actual request is sent to server and response is distributed to everyone requesting data. Module associated: `utils/cache/cache.js`.

 * **Caching/Cache Handling**: Can cache api responses and store them into browser's local storage. The duration and preferences for caching are defined in `cachePrefs.js`.
* Expired caches will be automatically removed/renewed. An internal non-blocking loop runs when every new page is opened. This process deletes old expired cache automatically. Although it has to be manually called, the module is: `utils/cache/storage/storageMaintain`. Just run the `initStorageMaintenance` method after importing.

 * **Async Await**: Ability to define api endpoints as function dependencies. Specify URI to api endpoint and the result of the call will be injected into function. Once all api dependencies are fulfilled, function is automatically executed with pre-specified parameters and api call results.
* Difference between using Async Await versus normally calling api endpoints (including more details and example of how this works) can be found in associated module: `utils/asyncAwait.js`.

 * **Encapsulation Module**: A module to easily encapsulate javascript ES6 classes. The classes are formed into JS objects with functions from classes. The functions are bound to class instance. Custom methods to reveal can be specified and other methods from class will be hidden from user. The user of this object cannot access any other methods or class members except those specified to be exposed. Associated module: `utils/roEncapClassObj.js`.
* Example usage: `utils/apiTrack.js`

 * **Pagination**: A side-module to generate array for pagination. Associated module (with more details): `utils/pagen.js`.

Additional Details
------------------

This is sort of "bootstrap" code. Meaning to use it, you will have to customize the code to your needs to an extent. Hence, source code is documented to ease the understanding of code.

Requirements
------------

Code is written is ES6 javascript. Hence babel would be required to transpile to ES5. Additionally it uses some in-draft (as of date) specs such as JS spread operator. So `babel-plugin-transform-object-rest-spread` plugin will also be required.
