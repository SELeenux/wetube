import axios from "axios";
const removeBtns = document.getElementsByClassName("jsRemoveBtn");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const decreaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
}

const removeComment = (commentId) => {
  const li = document.getElementById(commentId);
  const span = li.querySelector("span");
  li.removeChild(span);
  commentList.removeChild(li);
  decreaseNumber();
};

const sendRemoveComment = async (commentId) => {
  const videoId = window.location.href.split("/videos/")[1];
  const response = await axios({
    url: `/api/${videoId}/remove-comment`,
    method: "POST",
    data: {
      commentId
    }
  });
  if (response.status === 200) {
    removeComment(commentId);
  }
}

const handleRemoveClick = (event) => {
  const commentId = event.target.parentElement.id;
  sendRemoveComment(commentId);
}

function init() {
  for (var i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener("click", handleRemoveClick);
  }
}

if (removeBtns) {
  init();
}