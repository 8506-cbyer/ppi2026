import './NoticeList.css'

function NoticeList({ notices }) {
    return (
        <main>
        <h1>Mural Digital do IFRN - Campus Macau</h1>

        {notices.map((notice) => (
          <NoticeCard notice={notice} />
        ))}
      </main>
  );
}

export default NoticeList;