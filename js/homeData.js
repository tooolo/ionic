//轮播图

.factory('$lunbopic', function() {
      var lunbopics = [{
        "id" : 0,
        "imgsrc" : "slideimage01.png"
      },
        {
          "id" : 1,
          "imgsrc" : "slideimage02.png"
        },
        {
          "id" : 2,
          "imgsrc" : "slideimage03.png"
        }
      ]

      return {
        all: function() {
          return lunbopics;
        }
      }
    })


//好评榜
.factory("$HomeGoodlistRow", function () {
  var homeGoodlistRows =
    [
      [
        {
          "id": 0, "title": "javaScript 课程", "main": "good,good,非常棒！","imgsrc":"shouye_02.png"
        },
        {
          "id": 1, "title": "UI/UE", "main": "UI,非常棒！","imgsrc":"shouye_02.png"
        }
      ],
      [
        {
          "id":2,"title":"HTML5+CSS3", "main":"bangbangda,非常棒！","imgsrc":"shouye_02.png"
        },
        {
          "id": 3, "title":"jQuery", "main":"wuli jQuery,非常棒！","imgsrc":"shouye_02.png"
        }
      ]
  ]
  return {
    all: function () {
      return homeGoodlistRows;
    }
  };

})

//最新课程
.factory("$HomeNewLists", function () {
  var homeNewListRow = [
    [{"id": 0, "title": "javaScript 课程", "main": "good,good,非常棒！", "imgsrc": "shouye_03.png"},
      {"id": 1, "title": "UI/UE", "main": "UI,非常棒！", "imgsrc": "shouye_03.png"}],
    [{"id": 2, "title": "HTML5+CSS3", "main": "bangbangda,非常棒！", "imgsrc": "shouye_03.png"},
      {"id": 3, "title": "jQuery", "main": "wuli jQuery,非常棒！", "imgsrc": "shouye_03.png"}]
  ];
  return {
    all: function () {
      return homeNewListRow;
    }
  };
})