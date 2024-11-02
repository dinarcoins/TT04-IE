var chưaCóCache = true,
  data = {
    ụTổng: 16854, // ID chuyên mục tổng của website
    //   tinTiêuĐiểm: 5027, // ID tin tiêu điểm
    linkKhác: {
      // Đổi url theo id đường dẫn
      0: "/",
    },
    tênKhác: {
      // Đổi tên hiển thị theo id đường dẫn
      0: "Trang chủ",
    },
    ụHỏiĐáp: [], // MẢng chứa id sử dụng giao diện gửi câu hỏi
  };

var footerItemList = [
  {
    text: "Giới thiệu hội thảo",
    text1: "Chuyên mục 1",
    href1: "#",
    text2: "Chuyên mục 2",
    href2: "#",
    href2: "#",
    text3: "Chuyên mục 3",
    href3: "#",
    href3: "#",
  },
  {
    text: "Diễn đàn tham gia",
    text1: "Chuyên mục 1",
    href1: "#",
    text2: "Chuyên mục 2",
    href2: "#",
    text3: "Chuyên mục 3",
    href3: "#",
  },
  {
    text: "Hướng dẫn gửi tham luận",
    text1: "Chuyên mục 1",
    href1: "#",
    text2: "Chuyên mục 2",
    href2: "#",
    text3: "Chuyên mục 3",
    href3: "#",
  },
  {
    text: "Chương trình hội thảo",
    text1: "Chuyên mục 1",
    href1: "#",
    text2: "Chuyên mục 2",
    href2: "#",
    text3: "Chuyên mục 3",
    href3: "#",
  },
  {
    text: "Tin tức - sự kiện",
    text1: "Chuyên mục 1",
    href1: "#",
    text2: "Chuyên mục 2",
    href2: "#",
    text3: "Chuyên mục 3",
    href3: "#",
  },
];

var gửiThamLuậnList = [
  { icon: "fa-solid fa-share-nodes", title: "Chủ đề", text: "Chủ đề hội thảo" },
  {
    icon: "fa-solid fa-list-ul",
    title: "Hướng dẫn",
    text: "Hướng dẫn tham luận",
  },
  {
    icon: "fa-regular fa-circle-down",
    title: "Gửi tham luận",
    text: "Gửi tham luận hội thảo",
  },
];

$(function () {
  tảiTrước({
    dữLiệu: {
      // Sử dụng package riêng
      js: ["package.all"],
      css: ["package.all"],
    },
    biểuTượng: "imgs/logo3.png",
    chờ: 2000, //tạo độ trễ khi vào xem nội dung (đảm bảo nội dung render đầy đủ)
    koChe: false, //không hiển thị
    màuNền: "#fff", //Màu nền chờ
    riêng: true, //tải theo thư viện khác
    cache: true, //Tải cache các file package
    trước: function () {
      // Gán cache,v.v....
    },

    xong: function () {
      // Viết code giao diện hiển thị

      CẦN.js(
        [
          "https://thuctap.inevn.com/nguyendinhhuy/js/function.min.js",
          "https://thuctap.ine.vn/nguyendinhhuy/js/include.core.min.js",
          "https://thuctap.inevn.com/nguyendinhhuy/CauHinhWeb/js/include.min.js?=123",
        ],
        true,
        function () {
          ụTổng = data.ụTổng;
          CẦN.db(["chuyênMục." + ụTổng, "chuyênLực." + ụTổng], function () {
            var menuChính = config("chuyênLực." + ụTổng), // chuyên Lực sẽ chỉ lấy các chuyên mục cấp con ngay sau nó
              thân,
              banner;
            // cl("menuChính", menuChính);
            menuChính.pop();
            var trangChủ = function () {
              $(".wrapper")
                .empty()
                .append(
                  $("<div>", { class: "container-fluid" }).append(
                    // header fixed
                    $("<header>", {
                      class: "header w1 pf h60 aic df z5 t0 l0 ttfe tpbc td2",
                    }).append(
                      $("<div>", { class: "container pl25 pr25 w1" }).append(
                        $("<div>", { class: "df jcsb aic w1" }).append(
                          $("<a>", {
                            class: "fwb fs2",
                            text: "logo",
                            href: "#",
                          }),
                          $("<div>", { class: "cpi dn-lg" })
                            .append($("<i>", { class: "fa-solid fa-bars fs2" }))
                            .click(function () {
                              var navMenu = $(".menu");
                              navMenu.sửaLớp("+r0");
                            }),
                          // menu desktop
                          $("<nav>", {
                            class: "df aic fs13p fwb gap50 dn-lg-",
                          }).append(
                            !empty(menuChính) &&
                            menuChính.map(function (id) {
                                return $("<a>", {
                                  class: "menuNavItem bct bbw1 bss cpi",
                                  text: dữLiệu.tên(id, "ụ"),
                                });
                              }),

                            $("<div>", {
                              class:
                                "db buttonCustomWithoutBorder wsn bw1 bss wfc pl25 pt15 pr25 pb15 cf fwb fs13p brtl25 brtr25 brbl25 bn ttc cpi",
                              text: "Đăng nhập",
                            })
                          ),
                          // menu mobile
                          $("<nav>", {
                            class:
                              "df fdc plr25 pt25 pb25 tpa ttfe td5 aib w1 fs13p fwb gap50 menu dn-lg pa t0 r-1 bs01b bgcf ",
                          }).append(
                            $("<div>", { class: "closeMenu cpi dn-lg db" })
                              .append($("<i>", { class: "fa-solid fa-x fs2" }))
                              .click(function () {
                                var navMenu = $(".menu");
                                navMenu.sửaLớp("-r0");
                              }),
                            !empty(menuChính) &&
                              menuChính.map(function (id) {
                                return $("<a>", {
                                  class: "menuNavItem bct bbw1 bss cpi",
                                  text: dữLiệu.tên(id, "ụ"),
                                });
                              }),

                            $("<div>", {
                              class:
                                "db buttonCustomWithoutBorder wsn bw1 bss wfc pl25 pt15 pr25 pb15 cf fwb fs13p brtl25 brtr25 brbl25 bn ttc cpi",
                              text: "Đăng nhập",
                            })
                          )
                        )
                      )
                    ),
                    // giới thiệu hội thảo
                    $("<section>", {
                      class: "bannerHeader pr pt60 pb61",
                    }).append(
                      $("<div>", {
                        class: "bgpc bgrn bgsc wh1 pa t0 l0 z-1",
                        style:
                          "background-image:url(imgs/bgBanner.png);opacity: 0.2;",
                      }),
                      $("<div>", { class: "container pl25 pr25" }).append(
                        $("<div>", { class: "df pt60 jcsb" }).append(
                          $("<div>", { class: "col-xs-12 col-md-5" }).append(
                            $("<div>", {
                              class: "fwb ttu cb fs16 fs14-sm lh25",
                              text: "hội thảo khoa học quốc tế",
                            }),
                            $("<div>", {
                              text: ' "ngôn ngữ học ứng dụng - xu hướng chuyển đổi trong khu vực châu á - thái bình dương "',
                              class: "ttu fwb fs15 fs1-md lh25",
                              style: "color:#6a1bbf ",
                            }),
                            $("<div>", {
                              text: "kết nối nhà nghiên cứu khu vực châu á - thái bình dương chia sẻ kinh nghiệm nghiên cứu và giảng dạy lĩnh vực ngôn ngữ học ứng dụng",
                              class: "fs1 ttc lh25 fs09-xs",
                            }),
                            $("<div>", { class: "mt50" }).append(
                              $("<a>", {
                                text: "Gửi tham luận",
                                class:
                                  "buttonCustomWithoutBorder bw1 bss wfc pl25 pt15 pr25 pb15 cf fwb fs13p brtl25 brtr25 brbl25 bn ttc cpi",
                              }),
                              $("<a>", {
                                text: "Tìm hiểu thêm",
                                class:
                                  "buttonCustomWithBorder bw1 bss wfc pl25 pt15 pr25 pb15 fwb fs13p brtl25 brtr25 brbl25 ttc ml25 cpi",
                              })
                            )
                          ),
                          $("<div>", {
                            class: "col-xs-12 col-md-5 pr dn-md-",
                          }).append(
                            $("<img>", {
                              src: "/imgs/smallBg1.png",
                              alt: "logo1",
                              class: "pa t0 r0 z3 w50 brtl25 brtr25 brbl25",
                            }),
                            $("<img>", {
                              src: "/imgs/smallBg2.png",
                              alt: "logo2",
                              class: "pa t20 l0 z1 w70 brtl25 brtr25 brbl25",
                            }),
                            $("<img>", {
                              src: "/imgs/smallBg3.png",
                              alt: "logo3",
                              class: "pa b0 r0 z0 w40 brtl25 brtr25 brbl25",
                            })
                          )
                        )
                      )
                    ),
                    $("<section>", {
                      class: "bgGradient pr pb60 plr5 pt180",
                    }).append(
                      $("<div>", {
                        class:
                          "pl5 pr5 pa-sm pr container t0 l50 tt df z2 bgcf bra50p w1 jcsb aic pl50 pt50 pb50 pr50 fww",
                      }).append(
                        $("<div>", {
                          class: "df aic mb15 jcc w50 col-sm-3",
                        }).append(
                          $("<i>", {
                            class: "fa-solid fa-microphone fs4 fs2-md",
                            style: "color: #6a1bbf",
                          }),
                          $("<div>", { class: "ml25 col-xs-6" }).append(
                            $("<div>", { class: "fs2 fwb fs1-md", text: "03" }),
                            $("<div>", {
                              class: "fs1 fs09-md ttc wsn",
                              text: "Ngày làm việc",
                            })
                          )
                        ),
                        $("<div>", {
                          class: "df aic mb15 jcc w50 col-sm-3",
                        }).append(
                          $("<i>", {
                            class: "fa-solid fa-stamp fs4 fs2-md",
                            style: "color: #6a1bbf",
                          }),
                          $("<div>", { class: "ml25 col-xs-6" }).append(
                            $("<div>", {
                              class: "fs2 fwb fs1-md",
                              text: "20+",
                            }),
                            $("<div>", {
                              class: "fs1 fs09-md ttc",
                              text: "Diễn giả",
                            })
                          )
                        ),
                        $("<div>", {
                          class: "df aic mb15 jcc w50 col-sm-3",
                        }).append(
                          $("<i>", {
                            class: "fa-solid fa-map-location-dot fs4 fs2-md",
                            style: "color: #6a1bbf",
                          }),
                          $("<div>", { class: "ml25 col-xs-6" }).append(
                            $("<div>", {
                              class: "fs2 fwb fs1-md",
                              text: "10+",
                            }),
                            $("<div>", {
                              class: "fs1 fs09-md ttc",
                              text: "Quốc gia",
                            })
                          )
                        ),
                        $("<div>", {
                          class: "df aic mb15 jcc w50 col-sm-3",
                        }).append(
                          $("<i>", {
                            class: "fa-solid fa-share-nodes fs4 fs2-md",
                            style: "color: #6a1bbf",
                          }),
                          $("<div>", { class: "ml25 col-xs-6" }).append(
                            $("<div>", { class: "fs2 fwb fs1-md", text: "7+" }),
                            $("<div>", {
                              class: "fs1 fs09-md ttc",
                              text: "Chủ đề",
                            })
                          )
                        )
                      ),
                      $("<div>", { class: "container pl25 pr25" }).append(
                        $("<div>", { class: "tac cf mb25" }).append(
                          $("<div>", {
                            text: dữLiệu.tên(16855, "ụ"),
                            class: "fwb ttu fs2 fs14-sm",
                          }),
                          $("<div>", {
                            text: dữLiệu.môTả(16855, "ụ"),
                            class: "ttu fs1 fs09-xs lh25",
                          })
                        ),
                        $("<div>", { class: "df jcsb aic fww" }).xửLý(
                          "đốiTượng.tải.bàiViết",
                          {
                            d: {
                              thuộcTính: {
                                ụ: ["16855", "~|"],
                              },
                              giớiHạn: 10,
                              sắpXếp: "ấ-",
                            },
                          },
                          function (a) {
                            var t = $(this);
                            //   a: Danh sách id bài viết
                            CẦN.db("bàiViết." + a, function () {
                              cl(config("bàiViết."+a[0]+".ộ"));
                              t.append(
                                $("<div>", {
                                  class:
                                    "col-xs-12 col-md-6 pb31 brtl30 brtr30 brbl30 bgsc bgrn bgsc",
                                }).ảnh(a[0], "ế", true),
                                $("<div>", {
                                  text: dữLiệu.môTả(a[0], "ế", 500),
                                  class:
                                    "col-xs-12 col-md-5 cf lh16 fs13 fs09-xs mt15",
                                })
                              );
                            });
                          }
                        )
                      )
                    ),
                    // Diễn giả tham gia
                    $("<section>", {
                      class: "pt60 pb60",
                    }).append(
                      $("<div>", { class: "container pl25 pr25" }).append(
                        $("<div>", { class: "df jcc fww " }).append(
                          $("<div>", { class: "tac cf mb2 col-xs-12" }).append(
                            $("<div>", {
                              text: dữLiệu.tên(16856, "ụ"),
                              class: "fwb ttu fs2 fs14-sm",
                              style: "color: #6a1bbf",
                            }),
                            $("<div>", {
                              text: dữLiệu.môTả(16856, "ụ"),
                              class: "ttu fs1 fs09-md lh25 c0",
                            })
                          ),
                          $("<div>", {
                            class: "pl5 pr5 df fww col-xs-12",
                          }).xửLý(
                            "đốiTượng.tải.bàiViết",
                            {
                              d: {
                                thuộcTính: {
                                  ụ: ["16856", "~|"],
                                },
                                giớiHạn: 6,
                                sắpXếp: "ấ-",
                              },
                            },
                            function (a) {
                              var t = $(this);
                              //   a: Danh sách id bài viết
                              CẦN.db("bàiViết." + a, function () {
                                t.empty().append(
                                  a.map(function (id, index) {
                                    // cl(' dữLiệu.môTả(id,"ụ")',  dữLiệu.môTả(id,"ế"))
                                    //ia: id ế: mô tả của bài viết
                                    return $("<div>", {
                                      text: dữLiệu.môTả(id, "ụ"),
                                      class: `image-item bgrn bgpc bgsc pb51 ml5 mr5 mt5 mb5 bsbb mb50-md ${dữLiệu.môTả(
                                        id,
                                        "ế"
                                      )}`,
                                    }).ảnh(id, "ế", true);
                                  })
                                );
                              });
                            }
                          ),
                          $("<a>", {
                            text: "Xem thêm",
                            class:
                              "buttonCustomWithBorder bw1 bss wfc pl25 pt15 pr25 pb15 fwb fs13p brtl25 brtr25 brbl25 mt50 db cpi",
                          })
                        )
                      )
                    ),
                    // Hướng dẫn gửi tham luận
                    $("<section>", {
                      class: "bgGradient pr pb50 pt60",
                    }).append(
                      $("<div>", { class: "container pl25 pr25" }).append(
                        $("<div>", { class: "tac cf mb25" }).append(
                          $("<div>", {
                            text: dữLiệu.tên(16857, "ụ"),
                            class: "fwb ttu fs2 fs14-sm",
                          }),
                          $("<div>", {
                            text: dữLiệu.môTả(16857, "ụ"),
                            class: "ttu fs1 fs09-md lh25 cf",
                          })
                        ),
                        $("<div>", {
                          class: "df jcsb aic fww",
                        }).append(
                          gửiThamLuậnList.map(function (item) {
                            return $("<div>", {
                              class: "col-xs-12 col-sm-4 plr15-sm ",
                            }).append(
                              $("<div>", {
                                class:
                                  "brtl25 brtr25 brbl25 bgcf pl35 pr35 pt35 pb35 pt10-xs pb10-xs mb15",
                              }).append(
                                $("<i>", {
                                  class: `${item.icon} fs2 fs1-xs mb15`,
                                  style: "color: #6a1bbf",
                                }),
                                $("<div>", {
                                  text: item.title,
                                  class: "fs1 fs1-xs fwb mb15",
                                }),
                                $("<div>", {
                                  text: item.text,
                                  class: "fs1 fs09-sm ",
                                })
                              )
                            );
                          })
                        )
                      )
                    ),
                    // Chương trình hội thảo
                    $("<section>", {
                      class: "pb50 pt60",
                    }).append(
                      $("<div>", { class: "container pl25 pr25" }).append(
                        $("<div>", { class: "tac cf mb25" }).append(
                          $("<div>", {
                            text: dữLiệu.tên(16858, "ụ"),
                            class: "fwb ttu fs2 fs14-sm c0",
                            style: `color: #6a1bbf`,
                          }),
                          $("<div>", {
                            text: dữLiệu.môTả(16858, "ụ"),
                            class: "ttu fs1 fs09-md lh25 c0",
                          })
                        ),
                        $("<div>", { class: "" }).append(
                          $("<div>", {
                            class: "tab-buttons df jcsa aic mb50",
                          }).append(
                            $("<div>", {
                              text: "01/11/2023",
                              class:
                                "tab-button bbw2 bbss bbcf pb10 cpi wfc fs15 fs1-sm",
                            }),
                            $("<div>", {
                              text: "02/11/2023",
                              class:
                                "tab-button bbw2 bbss bbcf pb10 cpi wfc fs15 fs1-sm",
                            }),
                            $("<div>", {
                              text: "03/11/2023",
                              class:
                                "tab-button bbw2 bbss bbcf pb10 cpi wfc fs15 fs1-sm",
                            })
                          ),
                          $("<div>", { class: "tab-content df fww" }).xửLý(
                            "đốiTượng.tải.bàiViết",
                            {
                              d: {
                                thuộcTính: { ụ: [16858, "~|"] },
                                sắpXếp: "ấ-",
                              },
                            },
                            function (i) {
                              var t = $(this);
                              CẦN.db("bàiViết." + i, function () {
                                !empty(i) &&
                                  t.empty().append(
                                    i.map(function (id, index) {
                                      return $("<div>", {
                                        class:
                                          "tab-item w1 pl50 pt35 pr50 pb35 brtl30 brtr30 brbl30 df fww mb25 pr5-xs pl5-xs",
                                      }).append(
                                        $("<div>", {
                                          text: dữLiệu.tên(id, "ế"),
                                          class: "mr50 mr0-xs fs15 fs09-xs fwb",
                                        }),
                                        $("<div>", {
                                          text: dữLiệu.môTả(id, "ế"),
                                          class: "fs15 fs09-xs fwb",
                                        })
                                      );
                                    })
                                  );
                              });
                            }
                          ),
                          $("<a>", {
                            text: "Xem thêm",
                            class:
                              "buttonCustomWithBorder bw1 bss wfc pl25 pt15 pr25 pb15 fwb fs13p brtl25 brtr25 brbl25 mla mra mt50 db cpi",
                          })
                        )
                      )
                    ),
                    // tin tức - sự kiện
                    $("<section>", {
                      class: "pb50 pt60",
                    }).append(
                      $("<div>", { class: "container pl25 pr25" }).append(
                        $("<div>", { class: "tac cf mb25" }).append(
                          $("<div>", {
                            text: dữLiệu.tên(16859, "ụ"),
                            class: "fwb ttu fs2 fs14-sm c0",
                            style: "color: #6a1bbf",
                          }),
                          $("<div>", {
                            text: dữLiệu.môTả(16859, "ụ"),
                            class: "ttu fs1 fs09-md lh25 c0",
                          })
                        ),
                        $("<div>", { class: "" }).append(
                          $("<div>", { class: "df jcsb fww newContent" }).xửLý(
                            "đốiTượng.tải.bàiViết",
                            {
                              d: {
                                thuộcTính: {
                                  ụ: ["16859", "~|"],
                                },
                                giớiHạn: 6,
                                sắpXếp: "ấ-",
                              },
                            },
                            { cache: true, onCached: true, bảng: "bàiViết" },
                            function (i) {
                              // this để tới hiện tại của div đang xử lý
                              var t = $(this);
                              !empty(i) &&
                                t.empty().append(
                                  i.map(function (id, index) {
                                    return $("<div>", {
                                      class: "col-xs-12 col-sm-4 mt25",
                                    }).append(
                                      $("<a>", {
                                        class: "plr25 db cpi crdh",
                                      }).append(
                                        $("<div>", {
                                          class:
                                            "w1 pb169 bgsc bgpc bgrn bra10 bóng",
                                        }).ảnh(id, "ế", true),
                                        $("<div>", {
                                          class: "mtb15 fs11 fs1-xs wbox fwb",
                                          rows: "1",
                                          text: dữLiệu.tên(id, "ế"),
                                        }),
                                        $("<div>", {
                                          class: "wbox mb15 fs11 fs1-xs",
                                          rows: "2",
                                          text: dữLiệu.môTả(id, "ế"),
                                        }),
                                        $("<div>", { class: "df aic" }).append(
                                          $.icon("schedule::O fs11 fs1-xs mr5"),
                                          $("<div>", {
                                            class: "",
                                            text: iDate(
                                              config("bàiViết." + id + ".ấ"),
                                              "DD/MM/YYYY"
                                            ),
                                          })
                                        )
                                      )
                                    );
                                  })
                                );
                            }
                          ),
                          $("<a>", {
                            text: "Xem thêm",
                            class:
                              "buttonCustomWithBorder bw1 bss wfc pl25 pt15 pr25 pb15 fwb fs13p brtl25 brtr25 brbl25 mla mra mt50 db cpi",
                          })
                        )
                      )
                    ),

                    // nhà tài trợ logo
                    $("<section>", {
                      class: "bgGradient pr pb50 pt60",
                    }).append(
                      $("<div>", { class: "container pl25 pr25" }).append(
                        // title
                        $("<div>", { class: "tac cf mb25" }).append(
                          $("<div>", {
                            text: dữLiệu.tên(16862, "ụ"),
                            class: "fwb ttu fs2 fs14-sm",
                          }),
                          $("<div>", {
                            text: dữLiệu.môTả(16862, "ụ"),
                            class: "ttu fs1 fs09-md lh25",
                          })
                        ),
                        // content
                        $("<div>", { class: "df jcsb aic fww" }).xửLý(
                          "đốiTượng.tải.bàiViết",
                          {
                            d: {
                              thuộcTính: {
                                ụ: ["16862", "~|"],
                              },
                              giớiHạn: 8,
                              sắpXếp: "ấ-",
                            },
                          },
                          { cache: true, onCached: true, bảng: "bàiViết" },
                          function (i) {
                            var t = $(this);
                            !empty(i) &&
                              t.empty().append(
                                i.map(function (id, index) {
                                  return $("<a>", {
                                    class: `col-xs-5 col-sm-3 df aic jcc cpi plr25 plr15-xs mt25 ${
                                      index % 2 == 0 && `dn-sm-`
                                    }`,
                                  }).append(
                                    $("<div>", {
                                      class:
                                        " wh128  db bgrn bgpc bgsc brbl10 brbr10 brtl10 brtr10",
                                    }).ảnh(id, "ế", true)
                                  );
                                })
                              );
                          }
                        )
                      )
                    ),
                    // map section

                    $("<section>", {
                      class: "pb60 pt60",
                    }).append(
                      $("<div>", { class: "container pl25 pr25" }).append(
                        // content
                        $("<div>", { class: "w1" }).append(
                          $("<div>", {}).html(`  <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4666.059223525973!2d105.79308217611602!3d20.989158180650296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adb29ed54487%3A0xbe22035eae87b5d7!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBIw6AgTuG7mWk!5e1!3m2!1svi!2s!4v1729740242558!5m2!1svi!2s"
                          width="100%"
                          height="450"
                          style="border: 0"
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                          class="brtl25 brtr25 brbl25"
                        ></iframe>`),
                          $("<div>", { class: "tac cf mt50" }).append(
                            $("<div>", {
                              text: "Đăng ký nhận thông báo",
                              class: "fwb ttu fs2 fs14-sm ",
                              style: "color: #6a1bbf",
                            }),
                            $("<div>", { class: "df mt25" }).append(
                              $("<input>", {
                                type: "text",
                                placeholder: "Email",
                                class: "w1 mr25 bb1 on",
                              }),
                              $("<a>", {
                                text: "Nhận thông báo",
                                class:
                                  "buttonCustomWithoutBorder wsn bw1 bss wfc pl25 pt15 pr25 pb15 cf fwb fs13p brtl25 brtr25 brbl25 bn ttc cpi",
                              })
                            )
                          )
                        )
                      )
                    ),
                    // footer
                    $("<footer>", {
                      class: "bgGradient pt60 pb60 pr cf",
                    }).append(
                      $("<div>", { class: "container pl25 pr25" }).append(
                        $("<div>", { class: "df w1 jcsb aic" }).append(
                          $("<div>", { class: "df fww gap50 wfc" }).append(
                            $("<a>", { class: "wh80" }).append(
                              $("<img>", {
                                src: "/imgs/logo3.png",
                                alt: "logoFooter",
                                class: "wh1",
                              })
                            )
                          ),
                          $("<div>", {
                            class: "df gap50 fww jcfe dn-lg-",
                          })
                            .empty()
                            .append(
                              footerItemList.map(function (item, index) {
                                return $("<div>", {
                                  class: "df fdc w1-sm",
                                }).append(
                                  $("<div>", {
                                    text: item.text,
                                    class: "fwb lh25",
                                  }),
                                  $("<a>", {
                                    text: item.text1,
                                    href: item.href1,
                                    class: "lh25",
                                  }),
                                  $("<a>", {
                                    text: item.text2,
                                    href: item.href2,
                                    class: "lh25",
                                  }),
                                  $("<a>", {
                                    text: item.text3,
                                    href: item.href3,
                                    class: "lh25",
                                  })
                                );
                              })
                            ),
                          $("<div>", { class: "dn-lg" }).append(
                            $("<div>", { text: "Liên hệ: " }).append(
                              $("<a>", {
                                text: "012-345-6789",
                                href: "tel:0123456789",
                              })
                            ),
                            $("<div>", { text: "Địa chỉ: " }).append(
                              $("<a>", {
                                text: "NIC Building, Ha Noi",
                                href: "#",
                              })
                            )
                          )
                        )
                      ),
                      $("<div>", {
                        html: "Copy right &copy;. All rights reserved",
                        class: "fs12p tac mt50",
                      })
                    )
                  )
                );
            };
            trangChủ();

            var header = $(".header");

            $(window).scroll(function () {
              if ($(this).scrollTop() > 50) {
                header.sửaLớp("bgcf -bgct");
              } else {
                header.sửaLớp("bgct -bgcf");
              }
            });

            $.each(
              {
                // xửLý: "https://cdn.inevn.com/xửLý",
                0: function () {
                  trangChủ;
                },
                c: function (i, x, y, z) {
                  // Code giao diện chuyên mục tại
                  // đây;
                },
                a: function (i) {
                  // Code giao diện xem bài viết tại
                  // đây;
                },
              },
              function (á, à) {}
            );
          });
          vàoURL();
        }
      );
    },
  });
});
