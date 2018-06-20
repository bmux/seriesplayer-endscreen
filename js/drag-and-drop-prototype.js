// JavaScript Document
$("document").ready(function () {
  emptyTargetResizing();

  $(".drag-item").draggable({
    revert: function (event, ui) {
      $(this).data("uiDraggable").originalPosition = {
        top: 0,
        left: 0
      };
      return !event;
    },
    revertDuration: 100,
  });

  $(".drag-target").droppable({
    accept: ".drag-item",
    classes: {
      "ui-droppable-hover": "drag-target-over"
    },
    drop: function (event, ui) {
      $(this).innerWidth($(ui.draggable).outerWidth() + 4);
      $(this).innerHeight($(ui.draggable).outerHeight() + 4);
      $(ui.draggable).offset({ top: $(this).offset().top + 4, left: $(this).offset().left + 4 });
      console.log($(this).offset().top);
    }
  });
});

console.log($(".drag-target[item-type=" + $(this).attr("item-type") + "]"));

function emptyTargetResizing() {
  $(".drag-target").each(function () {
    var itemType = $(this).attr("item-type");
    var TargetMinWidth = 0;
    var TargetMinHeight = 0;
    var TargetPadding = $(this).css('padding-top');
    $(".drag-item[item-type=" + itemType + "]").each(function () {
      if ($(this).outerWidth() > TargetMinWidth) {
        TargetMinWidth = $(this).outerWidth()
      };
      if ($(this).outerHeight() > TargetMinHeight) {
        TargetMinHeight = $(this).outerHeight()
      };
    })
    $(this).innerWidth(TargetMinWidth + 4);
    $(this).innerHeight(TargetMinHeight + 4);
  });
}