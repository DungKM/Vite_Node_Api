export const listUser = (local) => {
    return `
    <div class="btn-group">
    <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true">
     ${local}
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">profile</a></li>
    
      <li><a class="dropdown-item logout" href="#">logout</a></li>
    </ul>
  </div>
    `
}