(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{207:function(t,v,_){t.exports=_.p+"assets/img/2.b1ec581f.png"},208:function(t,v,_){t.exports=_.p+"assets/img/3.5222e051.png"},250:function(t,v,_){"use strict";_.r(v);var r=_(0),e=Object(r.a)({},function(){var t=this,v=t.$createElement,r=t._self._c||v;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"tcp三次握手与四次挥手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手与四次挥手","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP三次握手与四次挥手")]),t._v(" "),r("p",[t._v("OSI分层：应用层、表示层、会话层、传输层、网络层、数据链路层、物理层")]),t._v(" "),r("p",[t._v("TCP/IP模型：应用层、传输层、网络层、网络接口层")]),t._v(" "),r("p",[t._v("应用层协议(常用)：HTTP、RTSP、FTP")]),t._v(" "),r("p",[t._v("传输层协议：TCP、UDP")]),t._v(" "),r("p",[r("img",{attrs:{src:_(207),alt:"三次握手"}})]),t._v(" "),r("ul",[r("li",[r("p",[t._v("第一次握手：客户端发送"),r("strong",[t._v("SYN")]),t._v("报文请求同步,同时进入"),r("strong",[t._v("SYN-SENT")]),t._v("状态")])]),t._v(" "),r("li",[r("p",[t._v("第二次握手：服务端接受到syn包后,发送"),r("strong",[t._v("ACK")]),t._v("报文用于确认,同时发送自己的"),r("strong",[t._v("SYN")]),t._v("报文,进入"),r("strong",[t._v("SYN-RCVD")]),t._v("状态")])]),t._v(" "),r("li",[r("p",[t._v("第三次握手：客户端收到服务端的"),r("strong",[t._v("ACK+SYN")]),t._v("后,向服务端发送"),r("strong",[t._v("ACK")]),t._v("报文确认收到,到此客户端和服务端建立连接,完成三次握手")])])]),t._v(" "),r("p",[r("img",{attrs:{src:_(208),alt:"四次挥手"}})]),t._v(" "),r("ul",[r("li",[t._v("第一次挥手:客户端发送"),r("strong",[t._v("FIN")]),t._v("报文,表示停止发送数据,进入"),r("strong",[t._v("FIN-WAIT")]),t._v("状态")]),t._v(" "),r("li",[t._v("第二次挥手:服务端收到客户端的"),r("strong",[t._v("FIN")]),t._v("报文,发送"),r("strong",[t._v("ACK")]),t._v("报文表示确认,同时服务器进入"),r("strong",[t._v("关闭等待")]),t._v("状态(此时客户端不再向服务器的方向发送数据，处于半关闭状态，即客户端已经没有数据要发送了，但是服务器若发送数据，客户端依然要接受)")])]),t._v(" "),r("blockquote",[r("p",[t._v("客户端就进入FIN-WAIT-2（终止等待2）状态，等待服务器发送连接释放报文（在这之前还需要接受服务器发送的最后的数据）")])]),t._v(" "),r("ul",[r("li",[t._v("第三次挥手:服务端发送"),r("strong",[t._v("FIN")]),t._v("报文,服务端发送最后的数据,所以会发送"),r("strong",[t._v("ACK")]),t._v("报文进行确认")]),t._v(" "),r("li",[t._v("第四次挥手:客户端接受到服务端的"),r("strong",[t._v("FIN")]),t._v("报文则发送"),r("strong",[t._v("ACK")]),t._v("报文表示确认收到,进入"),r("strong",[t._v("TIME-WAIT")]),t._v("状态,服务端收到客户端的"),r("strong",[t._v("ACK")]),t._v("报文即结束TCP连接")])]),t._v(" "),r("blockquote",[r("p",[t._v("客户端就进入了TIME-WAIT（时间等待）状态时, 注意此时TCP连接还没有释放，必须经过2∗∗MSL（最长报文段寿命）的时间后，当客户端撤销相应的TCB后，才进入CLOSED状态")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",{staticStyle:{"text-align":"center"}},[t._v("注释")]),t._v(" "),r("th",[t._v("ACK、SYN和FIN这些大写的单词表示标志位，其值要么是1，要么是0；ack、seq小写的单词表示序号。")])])]),t._v(" "),r("tbody",[r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("seq")]),t._v(" "),r("td",[t._v("TCP把连接中发送的所有数据字节都编上一个序号，第一个字节的编号由本地随机产生；给字节编上序号后，就给每一个报文段指派一个序号；序列号seq就是这个报文段中的第一个字节的数据编号。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("ack")]),t._v(" "),r("td",[t._v("期待收到对方下一个报文段的第一个数据字节的序号；序列号表示报文段携带数据的第一个字节的编号；而确认号指的是期望接收到下一个字节的编号；因此当前报文段最后一个字节的编号+1即为确认号")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("ACK")]),t._v(" "),r("td",[t._v("仅当ACK=1时，确认号字段才有效。ACK=0时，确认号无效")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("SYN")]),t._v(" "),r("td",[t._v("SYN=1，ACK=0时表示：这是一个连接请求报文段。若同意连接，则在响应报文段中使得SYN=1，ACK=1。因此，SYN=1表示这是一个连接请求，或连接接受报文。SYN这个标志位只有在TCP建产连接时才会被置1，握手完成后SYN标志位被置0。")])]),t._v(" "),r("tr",[r("td",{staticStyle:{"text-align":"center"}},[t._v("FIN")]),t._v(" "),r("td",[t._v("FIN=1表示：此报文段的发送方的数据已经发送完毕，并要求释放运输连接")])])])]),t._v(" "),r("h3",{attrs:{id:"q1-为什么连接的时候是三次握手，关闭的时候却是四次握手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#q1-为什么连接的时候是三次握手，关闭的时候却是四次握手","aria-hidden":"true"}},[t._v("#")]),t._v(" Q1:为什么连接的时候是三次握手，关闭的时候却是四次握手?")]),t._v(" "),r("p",[t._v('A1:当Server端收到Client端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当Server端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉Client端，"你发的FIN报文我收到了"。只有等到我Server端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送。故需要四步握手。')]),t._v(" "),r("h3",{attrs:{id:"q2-为什么time-wait状态需要经过2msl-最大报文段生存时间-才能返回到close状态？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#q2-为什么time-wait状态需要经过2msl-最大报文段生存时间-才能返回到close状态？","aria-hidden":"true"}},[t._v("#")]),t._v(" Q2: 为什么TIME_WAIT状态需要经过2MSL(最大报文段生存时间)才能返回到CLOSE状态？")]),t._v(" "),r("p",[t._v("A2:若客户端发完确认应答后直接进入CLOSED状态，那么如果该应答丢失，服务端等待超时后就会重新发送连接释放请求，但此时客户端已经关闭了，不会作出任何响应，因此服务端永远无法正常关闭。")]),t._v(" "),r("h3",{attrs:{id:"q3-为什么不能用两次握手进行连接？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#q3-为什么不能用两次握手进行连接？","aria-hidden":"true"}},[t._v("#")]),t._v(" Q3:为什么不能用两次握手进行连接？")]),t._v(" "),r("p",[t._v("A3:防止失效的连接请求报文段（若客户端向服务端发送的连接请求丢失，客户端等待应答超时后就会再次发送连接请求，此时，上一个连接请求就是『失效的』）被服务端接收，从而产生错误。")]),t._v(" "),r("h3",{attrs:{id:"q4-如果已经建立了连接，但是客户端突然出现故障了怎么办？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#q4-如果已经建立了连接，但是客户端突然出现故障了怎么办？","aria-hidden":"true"}},[t._v("#")]),t._v(" Q4: 如果已经建立了连接，但是客户端突然出现故障了怎么办？")]),t._v(" "),r("p",[t._v("A4:TCP还设有一个保活计时器，显然，客户端如果出现故障，服务器不能一直等下去，白白浪费资源。服务器每收到一次客户端的请求后都会重新复位这个计时器，时间通常是设置为2小时，若两小时还没有收到客户端的任何数据，服务器就会发送一个探测报文段，以后每隔75分钟发送一次。若一连发送10个探测报文仍然没反应，服务器就认为客户端出了故障，接着就关闭连接。")]),t._v(" "),r("h3",{attrs:{id:"q5：流量控制与拥塞控制"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#q5：流量控制与拥塞控制","aria-hidden":"true"}},[t._v("#")]),t._v(" Q5：流量控制与拥塞控制")]),t._v(" "),r("p",[t._v("流量控制主要是针对"),r("strong",[t._v("接收方的缓存")]),t._v("来设计的，引入滑动窗口的概念，发送方会定时发送窗口探测数据包，看是否有机会调整窗口的大小。当接收方比较慢的时候，要防止低能窗口综合征（别空出一个字节来就赶快告诉发送方，然后马上又填满了），可以当窗口太小的时候，不更新窗口，直到达到一定大小，或者缓冲区一半为空，才更新窗口。这就是流量控制。")]),t._v(" "),r("p",[t._v("拥塞控制主要是针对"),r("strong",[t._v("网络带宽")]),t._v("设置的，用于避免"),r("strong",[t._v("包丢失和超时重传")]),t._v("，一开始发送包的时候是通过指数性的增长，超过临界值（ssthresh 为 65535 个字节）后线性增长，如果发生丢包则需要超时重传：将 sshresh 设为 cwnd/2，将 cwnd 设为 1，重新开始"),r("strong",[t._v("慢启动")]),t._v("，若只是丢了一个中间包则只需要"),r("strong",[t._v("快速重传")])]),t._v(" "),r("p",[t._v("拓展:"),r("a",{attrs:{href:"https://blog.csdn.net/xiaokunzhang/article/details/80714094",target:"_blank",rel:"noopener noreferrer"}},[t._v("TCP协议——顺序问题、丢包问题、流量控制、拥塞控制"),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"tcp与udp的区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tcp与udp的区别","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP与UDP的区别")]),t._v(" "),r("ul",[r("li",[t._v("TCP协议是有连接的，有连接表示开始传输实际数据之前TCP的客户端和服务器端必须通过三次握手建立连接，会话结束之后也要结束连接。而UDP是无连接的")]),t._v(" "),r("li",[t._v("TCP协议保证数据按序发送，按序到达，提供超时重传来保证可靠性, UDP不保证")]),t._v(" "),r("li",[t._v("TCP是一对一的连接，而UDP则可以支持一对一，多对多，一对多的通信")]),t._v(" "),r("li",[t._v("TCP有流量控制和拥塞控制，UDP没有，网络拥堵不会影响发送端的发送速率")]),t._v(" "),r("li",[t._v("TCP首部需要20个字节, UDP首部只需8个字节")])]),t._v(" "),r("p",[t._v("常见应用场景:")]),t._v(" "),r("p",[r("strong",[t._v("QQ")]),t._v("为例:\n1.登陆过程，客户端client 采用TCP协议向服务器server发送信息，HTTP协议下载信息。登陆之后，会有一个TCP连接来保持在线状态。\n2.和好友发消息，客户端client采用UDP协议，但是需要通过服务器转发。腾讯为了确保传输消息的可靠，采用上层协议来保证可靠传输。如果消息发送失败，客户端会提示消息发送失败，并可重新发送。\n3.如果是在内网里面的两个客户端传文件，QQ采用的是P2P技术，不需要服务器中转。")])])},[],!1,null,null,null);v.default=e.exports}}]);