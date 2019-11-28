/**
 * Copyright 2015 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {validateData, loadScript} from '../3p/3p';

/**
 * @param {!Window} global
 * @param {!Object} data
 */
export function adservsolutions(global, data) {
  validateData(data,[],['client','zid']);
  (function(w,d,o,g,r,z){
    w[r]=w[r]||function(){(w[r+'l']=w[r+'l']||[]).push(arguments)};
    function e(b,w,r){if(w[r+'h']=b.pop()){
      loadScript(global,'https://cdn.'+w[r+'h']+'/libs/b.js',function(){},function(){e(g,w,r)});
    }}if(!w.ABN){e(g,w,r)};w[r]('c',{id:z+'&o=a'})
  })(global,global.document,'script',[data.client],'ABNS',data.zid);
}
