/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/
const proxy = require('http-proxy-middleware');

module.exports = app => {
	const options = {
		target: 'http://localhost:4000/',
		changeOrigin: true,
	};
	app.use(proxy(['/api'], options));
	app.use(proxy(['/proxy'], options));
	app.use(proxy(['/auth'], options));
	app.use(proxy(['/caproxy'], options));
	app.use(proxy(['/grpcwp'], options));
	app.use(proxy(['/deployer'], options));
	app.use(proxy(['/version.txt'], options));
	app.use(proxy(['/releaseNotes.json'], options));
};
