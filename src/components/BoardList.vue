<template>
  <div>
    <div class="w3-container">
      <div class="w3-row w3-section">
        <input
          type="text"
          v-model="title"
          class="w3-input s5 w3-border w3-col"
          placeholder="제목을 입력해주세요."
        />

        <input
          type="text"
          v-model="author"
          class="w3-input s5 w3-border w3-col"
          placeholder="작성자를 입력해주세요."
        />

        <button
          type="button"
          class="w3-col s2 w3-button w3-round w3-blue-gray w3-left-align"
          @click="WritePost"
        >
          등록
        </button>
      </div>
    </div>

    <table class="w3-table-all">
      <thead>
        <tr>
          <th>No</th>
          <th>제목</th>
          <th>작성자</th>
          <th>등록일시</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, idx) in list" :key="idx">
          <td>{{ row.idx }}</td>
          <td>{{ row.title }}</td>
          <td>{{ row.author }}</td>
          <td>{{ row.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Post } from "@/types/BoardTypes";
import { Vue, Component } from "vue-facing-decorator";

@Component
export default class BoardList extends Vue {
  title: string = "";
  author: string = "";
  list: Post[] = [
    {
      idx: 1,
      title: "제목1",
      author: "작성자1",
      createdAt: new Date(),
    },
    {
      idx: 2,
      title: "제목2",
      author: "작성자2",
      createdAt: new Date(),
    },
    {
      idx: 3,
      title: "제목3",
      author: "작성자1",
      createdAt: new Date(),
    },
    {
      idx: 4,
      title: "제목4",
      author: "작성자1",
      createdAt: new Date(),
    },
    {
      idx: 5,
      title: "제목5",
      author: "작성자2",
      createdAt: new Date(),
    },
  ];

  mounted(): void {
    this.resetWriteForm();
  }

  resetWriteForm(): void {
    this.title = "";
    this.author = "";
  }

  WritePost(): void {
    this.list.push({
      idx: this.list[this.list.length - 1].idx + 1,
      title: this.title,
      author: this.author,
      createdAt: new Date(),
    });
    this.resetWriteForm();
  }
}
</script>
