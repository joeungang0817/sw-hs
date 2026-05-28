export interface Member {
  id: number;
  name: string;
  role: string;
}
export const initialMembers: Member[] = [
  { id: 1, name: "홍길동", role: "동아리 회장" },
  { id: 2, name: "김철수", role: "프론트엔드 개발자" },
  { id: 3, name: "이영희", role: "디자이너" },
];
