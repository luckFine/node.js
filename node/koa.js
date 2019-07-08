// Koa 是一个新的 web 框架，由 Express 幕后的原班人马打造， 致力于成为 web 应用和 API 开发领域中的一个更小、更富有表现力、更健壮的基石。
// Koa 依赖 node v7.6.0 或 ES2015及更高版本和 async 方法支持.
// 安装
// $ nvm install 7
// $ npm i koa
// $ node my-koa-app.js

// Koa Context 将 node 的 request 和 response 对象封装到单个对象中，为编写 Web 应用程序和 API 提供了许多有用的方法。 
// 这些操作在 HTTP 服务器开发中频繁使用，它们被添加到此级别而不是更高级别的框架，这将强制中间件重新实现此通用功能。
// 每个请求都将创建一个 Context，并在中间件中作为接收器引用，或者 ctx 标识符，

context
ctx.req: Node 的 request 对象.
ctx.res: Node 的 response 对象.
ctx.request: koa 的 Request 对象.
ctx.response: koa 的 Response 对象.
ctx.state: 推荐的命名空间，用于通过中间件传递信息和你的前端视图。
            ctx.state.user = await User.find(id);
ctx.app: 应用程序实例引用
ctx.cookies.get(name, [options])  :通过 options 获取 cookie name:
ctx.cookies.set(name, value, [options]) :通过 options 设置 cookie name 的 value :
        maxAge 一个数字表示从 Date.now() 得到的毫秒数
        signed cookie 签名值
        expires cookie 过期的 Date
        path cookie 路径, 默认是'/'
        domain cookie 域名
        secure 安全 cookie
        httpOnly 服务器可访问 cookie, 默认是 true
        overwrite 一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉
ctx.throw([status], [msg], [properties]): 抛出错误
        ctx.throw(400);
        ctx.throw(400, 'name required');
        ctx.throw(400, 'name required', { user: user });
        等效于
        const err = new Error('name required');
        err.status = 400;
        err.expose = true;
        throw err;

以下访问器和 Request 别名等效：
    ctx.header
    ctx.headers
    ctx.method
    ctx.method=
    ctx.url
    ctx.url=
    ctx.originalUrl
    ctx.origin
    ctx.href
    ctx.path
    ctx.path=
    ctx.query
    ctx.query=
    ctx.querystring
    ctx.querystring=
    ctx.host
    ctx.hostname
    ctx.fresh
    ctx.stale
    ctx.socket
    ctx.protocol
    ctx.secure
    ctx.ip
    ctx.ips
    ctx.subdomains
    ctx.is()
    ctx.accepts()
    ctx.acceptsEncodings()
    ctx.acceptsCharsets()
    ctx.acceptsLanguages()
    ctx.get(）
Response 别名
    ctx.body
    ctx.body=
    ctx.status
    ctx.status=
    ctx.message
    ctx.message=
    ctx.length=
    ctx.length
    ctx.type=
    ctx.type
    ctx.headerSent
    ctx.redirect()
    ctx.attachment()
    ctx.set()
    ctx.append()
    ctx.remove()
    ctx.lastModified=
    ctx.etag=

请求(Request)
request.header：请求标头对象
request.method：请求方法
request.length：返回以数字返回请求的 Content-Length，或 undefined
request.url：获取请求 URL.
request.originalUrl：获取请求原始URL。
request.origin：获取URL的来源，包括 protocol 和 host。
request.href：获取完整的请求URL，包括 protocol，host 和 url。
request.path：请求路径
request.querystring：设置原始查询字符串。
request.search：使用 ? 获取原始查询字符串。
request.host：获取当前主机（hostname:port）。当 app.proxy 是 true 时支持 X-Forwarded-Host，否则使用 Host。
request.hostname：存在时获取主机名。当 app.proxy 是 true 时支持 X-Forwarded-Host，否则使用 Host。
request.URL：获取 WHATWG 解析的 URL 对象。
request.type：获取请求 Content-Type 不含参数 "charset"。
request.charset：在存在时获取请求字符集，或者 undefined：
request.query：获取解析的查询字符串, 当没有查询字符串时，返回一个空对象。请注意，此 getter _不_ 支持嵌套解析。
request.fresh：检查请求缓存是否“新鲜”，也就是内容没有改变。此方法用于 If-None-Match / ETag, 和 If-Modified-Since 和 Last-Modified 之间的缓存协商。 在设置一个或多个这些响应头后应该引用它。
request.stale：与 request.fresh相反
request.protocol：返回请求协议，“https” 或 “http”。当 app.proxy 是 true 时支持 X-Forwarded-Proto
request.secure：通过 ctx.protocol == "https" 来检查请求是否通过 TLS 发出。
request.ip：请求远程地址。 当 app.proxy 是 true 时支持 X-Forwarded-Proto。
request.is(types...)：检查传入请求是否包含 Content-Type 头字段， 并且包含任意的 mime type。 如果没有请求主体，返回 null。 如果没有内容类型，或者匹配失败，则返回 false。 反之则返回匹配的 content-type。

内容协商
request.accepts(types)
request.acceptsEncodings(types)
request.acceptsCharsets(charsets)
request.acceptsLanguages(langs)
如果没有提供类型，则返回 所有 可接受的类型。

如果提供多种类型，将返回最佳匹配。 如果没有找到匹配项，则返回一个false，你应该向客户端发送一个406 "Not Acceptable" 响应。

如果接收到任何类型的接收头，则会返回第一个类型。 因此，你提供的类型的顺序很重要。









