import {NavController, TranslatePipe, Page, Modal} from "ionic-angular";
import {HELPER_ARTICLES} from "./HELPER_ARTICLES";
import {TODO_LISTS} from "./TODO_LISTS";
import {Todo} from "../components/todo";
import {HTMLModal} from "../components/html-modal";


@Page({
  templateUrl: 'build/pages/day/day1.html'
})
export class Day1 {
  basicView:string = "articleView";
  articles = HELPER_ARTICLES['zh-cn'];

  constructor(public nav:NavController) {
    this.nav = nav;
  }

  presentTodoModal(params) {
    var todoLists = TODO_LISTS['zh-cn'][params.domain];
    var todoModal = Modal.create(Todo, {todoLists: todoLists});
    this.nav.present(todoModal);
  }

  presentHTMLModal(params) {
    var articleModal;

    if (params.type === 'desc') {
      var slug = 'assets/desc/html/' + params.slug + '.html';
      articleModal = Modal.create(HTMLModal, {slug: slug});
    } else if (params.domain) {
      var slug = 'assets/growth/' + params.domain + '/' + params.slug + '.html';
      articleModal = Modal.create(HTMLModal, {slug: slug});
    } else {
      var slug = 'assets/articles/' + params.slug + '.html';
      articleModal = Modal.create(HTMLModal, {slug: slug});
    }

    this.nav.present(articleModal);
  }
}

@Page({
  templateUrl: 'build/pages/main/main.html',
  pipes: [TranslatePipe]
})
export class MainView {
  constructor(public nav:NavController) {

  }

  openNavDetailsPage() {
    this.nav.push(Day1);
  }
}
