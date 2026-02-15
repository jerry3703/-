# 1. 进入项目目录
cd C:\Users\lenovo\diary

# 2. 替换文件后提交修改
git add src/config.ts
git commit -m "添加 pioConfig 完整定义和导出，修复构建失败"

# 3. 本地构建验证
npm run build

# 4. 推送至 GitHub 仓库
git push github-mirror master