---
title: "TECH_02 - RBAC Matrix & Implementation — Nara ERP (Laravel 13 Edition)"
description: "Dokumen implementasi teknis Role-Based Access Control (RBAC) untuk Nara ERP menggunakan spatie/laravel-permission dan Filament Shield. Mencakup 14 role, 44 permission, matriks asosiasi, aturan union permission, hierarki role, 3 lapis keamanan (Middleware, Policies, Actions), dan panduan setup Filament Shield. Semua aturan bisnis mengacu pada DNA_06 dan DNA_07."
author: "Nara Project Planner (Hanif — Lead Principal Architect & Software Engineering)"
date: 2026-05-07
tags: ["rbac", "roles", "permissions", "spatie", "filament-shield", "laravel13", "access_control", "security"]
category: "Architecture"
ai_context:
  goal: "Menyediakan spesifikasi implementasi RBAC yang preskriptif dan tidak ambigu untuk diimplementasikan oleh agen AI menggunakan spatie/laravel-permission dan Filament Shield v4.x."
  target_audience: "Agen AI, Backend Developer, Security Engineer"
  constraints: "Semua permission mengacu pada DNA_06 (User Journey) dan DNA_07 (Business Rules). Satu user bisa memiliki banyak role. Permission akhir = UNION semua role. Implementasi menggunakan spatie/laravel-permission ^7.0 dan bezhansalleh/filament-shield 4.x."
language: "id"
---

# RBAC MATRIX & IMPLEMENTATION — NARA ERP (LARAVEL 13 EDITION)

> **Nama File:** `TECH_02_RBAC.md`
> **Kode Dokumen:** `DOC-RBAC-L13`
> **Sifat:** Referensi Stabil
> **Versi:** 1.0.0 — Laravel 13 Implementation
> **Rujuk ke:** [AGENTS.md](./AGENTS.md), [TECH_01_STACK.md](./TECH_01_STACK.md), [../../DNA/DNA_04_PRODUCT_POSITIONING.md](../../DNA/DNA_04_PRODUCT_POSITIONING.md), [../../DNA/DNA_05_PROBLEM_PERSONA.md](../../DNA/DNA_05_PROBLEM_PERSONA.md), [../../DNA/DNA_06_USER_JOURNEY.md](../../DNA/DNA_06_USER_JOURNEY.md), [../../DNA/DNA_07_BUSINESS_RULES.md](../../DNA/DNA_07_BUSINESS_RULES.md)

---

## 1. Arsitektur RBAC

### 1.1 Komponen

| Komponen | Package | Fungsi |
|---|---|---|
| **Permission Engine** | `spatie/laravel-permission` ^7.0 | Menyediakan model Role, Permission, trait HasRoles, dan integrasi native dengan Laravel Gate. |
| **Admin UI** | `bezhansalleh/filament-shield` 4.x | UI manajemen role/permission di Filament. Auto-generate permission dari Filament Resources, Pages, Widgets. |
| **Super Admin Bypass** | `Gate::before()` | Role `super_admin` otomatis mendapatkan akses penuh (wildcard) tanpa perlu mendaftarkan semua permission. |
| **Permission Caching** | Spatie built-in cache | Permission di-cache untuk performa. Cache otomatis di-reset saat role/permission berubah. |

### 1.2 Tiga Lapis Keamanan

| Lapis | Mekanisme | Implementasi |
|---|---|---|
| **1. Middleware** | `can:permission_name` | Verifikasi permission sebelum mengakses route/halaman. Diimplementasikan di `routes/admin.php`. |
| **2. Policies & Gates** | `Gate::allows()` / `$user->can()` | Verifikasi permission sebelum merender UI. Filament otomatis menggunakan Policies yang di-generate oleh Shield. |
| **3. Actions/Services** | `$user->hasPermissionTo()` | Verifikasi permission sebelum mengeksekusi mutasi data. Diimplementasikan di setiap Action class. |

---

## 2. Master List Permission (44 Permission)

### 2.1 Permission Inti (Core)

| Kode | Permission Key | Deskripsi | Modul |
|---|---|---|---|
| P001 | `admin:full_access` | Akses penuh ke seluruh sistem (wildcard). | Core |
| P002 | `view:dashboard` | Melihat dashboard utama. | Core |
| P003 | `create:event` | Membuat event baru. | Event |
| P004 | `edit:event` | Mengubah data event. | Event |
| P005 | `delete:event` | Menghapus event. | Event |
| P006 | `view:event:finance` | Melihat data keuangan event. | Event |
| P007 | `manage:event:rab` | Mengelola RAB event. | Event |
| P008 | `view:finance:gl` | Melihat General Ledger. | Finance |
| P009 | `manage:finance:petty_cash` | Mengelola Petty Cash. | Finance |
| P010 | `manage:finance:payroll` | Mengelola Payroll. | Finance |
| P011 | `approve:finance:level1` | Persetujuan transaksi level 1. | Finance |
| P012 | `approve:finance:level2` | Persetujuan transaksi level 2 (final). | Finance |
| P013 | `manage:hr:employees` | Mengelola data karyawan tetap (KARTAP). | HR |
| P014 | `manage:hr:freelancers` | Mengelola data tenaga lepas. | HR |
| P015 | `view:hr:data` | Melihat data HRIS. | HR |
| P016 | `manage:legal:contracts` | Mengelola kontrak. | Legal |
| P017 | `manage:legal:permits` | Mengelola perizinan. | Legal |
| P018 | `view:audit:log` | Melihat audit trail. | Core |
| P019 | `manage:cms` | Mengelola konten halaman publik (CMS). | Content |
| P020 | `manage:users` | Mengelola pengguna & RBAC (kecuali role lebih tinggi). | Core |
| P021 | `manage:settings` | Mengelola pengaturan global aplikasi. | Core |
| P022 | `manage:project_type` | Menambah/mengubah project type dan event category. | Core |
| P023 | `view:vendors` | Melihat data vendor. | Vendor |
| P024 | `manage:vendors` | Mengelola data vendor, undang vendor. | Vendor |
| P025 | `view:sponsors` | Melihat data sponsor. | Sponsor |
| P026 | `manage:sponsors` | Mengelola sponsor, generate proposal. | Sponsor |
| P027 | `view:clients` | Melihat data client. | Client |
| P028 | `manage:clients` | Mengelola client, RFP pipeline. | Client |
| P029 | `view:marketplace` | Melihat marketplace vendor & sponsor. | Marketplace |
| P030 | `manage:inventory` | Mengelola aset fisik dan logistik. | Inventory |

### 2.2 Permission Tambahan (Keuangan & Operasional)

| Kode | Permission Key | Deskripsi | Modul |
|---|---|---|---|
| P031 | `manage:finance:coa` | Mengelola Chart of Accounts. | Finance |
| P032 | `manage:finance:refunds` | Memproses refund request. | Finance |
| P033 | `view:invoices` | Melihat invoice. | Finance |
| P034 | `manage:invoices` | Membuat/mengelola invoice. | Finance |
| P035 | `view:purchase_orders` | Melihat purchase order. | Vendor/Finance |
| P036 | `manage:purchase_orders` | Membuat/mengelola purchase order. | Vendor/Finance |
| P037 | `manage:briefs` | Membuat dan mengelola brief (Project Manager). | Event |
| P038 | `view:briefs` | Melihat brief yang diterima (Vendor). | Vendor |
| P039 | `manage:sops` | Mengelola Standard Operating Procedures. | Legal |
| P040 | `view:sops` | Melihat SOP. | Semua Internal |
| P041 | `view:commissions` | Melihat data komisi sponsor. | Finance |
| P042 | `manage:commissions` | Mengelola aturan komisi sponsor. | Finance |
| P043 | `plugin:manage` | Menginstal, mengaktifkan, menonaktifkan, dan menghapus modul. | Core |
| P044 | `plugin:view` | Melihat daftar modul yang terinstal. | Core |

---

## 3. Matriks Role vs Permission

### 3.1 Matriks untuk Role Internal

| Permission \ Role | `super_admin` | `coo` | `cfo` | `project_manager` | `finance_manager` | `hr_manager` | `legal_officer` | `staff_operasional` | `hr_staff` | `admin_officer` |
|---|---|---|---|---|---|---|---|---|---|---|
| `admin:full_access` | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `view:dashboard` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `create:event` | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `edit:event` | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `delete:event` | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `view:event:finance` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:event:rab` | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `view:finance:gl` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| `manage:finance:petty_cash` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| `manage:finance:payroll` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `approve:finance:level1` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `approve:finance:level2` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:hr:employees` | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `manage:hr:freelancers` | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |
| `view:hr:data` | ✅ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ | ❌ |
| `manage:legal:contracts` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| `manage:legal:permits` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| `view:audit:log` | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:cms` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:users` | ✅ | ✅ (L3-5) | ❌ | ❌ | ❌ | ✅ (L4-5) | ❌ | ❌ | ❌ | ❌ |
| `manage:settings` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:project_type` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `view:vendors` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| `manage:vendors` | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `view:sponsors` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:sponsors` | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `view:clients` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| `manage:clients` | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `view:marketplace` | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:inventory` | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ |

**Permission Tambahan:**

| Permission \ Role | `super_admin` | `coo` | `cfo` | `project_manager` | `finance_manager` | `hr_manager` | `legal_officer` | `staff_operasional` | `hr_staff` | `admin_officer` |
|---|---|---|---|---|---|---|---|---|---|---|
| `manage:finance:coa` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:finance:refunds` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `view:invoices` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:invoices` | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `view:purchase_orders` | ✅ | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:purchase_orders` | ✅ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:briefs` | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `view:briefs` | ✅ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:sops` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| `view:sops` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `view:commissions` | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `manage:commissions` | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `plugin:manage` | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| `plugin:view` | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

### 3.2 Matriks untuk Role Eksternal & Publik

| Permission \ Role | `vendor` | `sponsor` | `client` | `peserta` |
|---|---|---|---|---|
| `view:dashboard` | ✅ (portal) | ✅ (portal) | ✅ (portal) | ✅ (user) |
| `view:vendors` | ✅ (data sendiri) | ❌ | ❌ | ❌ |
| `view:sponsors` | ❌ | ✅ (data sendiri) | ❌ | ❌ |
| `view:clients` | ❌ | ❌ | ✅ (data sendiri) | ❌ |
| `view:marketplace` | ✅ | ✅ | ✅ | ❌ |
| `view:invoices` | ✅ (milik sendiri) | ❌ | ✅ (milik sendiri) | ❌ |
| `view:purchase_orders` | ✅ (milik sendiri) | ❌ | ❌ | ❌ |
| `view:briefs` | ✅ (milik sendiri) | ❌ | ❌ | ❌ |
| `view:sops` | ❌ | ❌ | ❌ | ❌ |
| `plugin:view` | ❌ | ❌ | ❌ | ❌ |

---

## 4. Aturan RBAC

### 4.1 Satu User, Banyak Role (Union Permission)

- Seorang **User** dapat memiliki **banyak Role** (disimpan di tabel pivot `model_has_roles`).
- **Permission akhir** = **UNION (gabungan) semua permission** dari semua role yang dimiliki.
- Spatie secara native mendukung ini melalui method:
  - `$user->getPermissionsViaRoles()` — mendapatkan koleksi permission dari semua role.
  - `$user->getAllPermissions()` — mendapatkan semua permission (langsung + via roles).
  - `$user->can('permission_name')` — akan mengembalikan `true` jika user memiliki permission tersebut, baik langsung maupun via role mana pun.
- **Tidak ada permission yang dikurangi** karena multiple roles. Union artinya gabungan, bukan irisan.

**Contoh Implementasi:**
```php
// User "Budi" memiliki role ["finance_manager", "hr_manager"]
$user = User::find(1);
$user->assignRole('finance_manager', 'hr_manager');

// Permission akhir = semua permission finance_manager + semua permission hr_manager
$user->can('manage:finance:petty_cash'); // true (dari finance_manager)
$user->can('manage:hr:employees');       // true (dari hr_manager)
$user->can('create:event');              // false (tidak dimiliki kedua role)
```

### 4.2 Hierarki Role & Validasi Update

Role yang lebih rendah **tidak boleh** mengubah role yang lebih tinggi.

| Pengubah (Level) | Bisa Mengubah Role Level |
|---|---|
| `super_admin` (Level 1) | Semua level (1-5). **Hanya Super Admin yang bisa mengubah Super Admin lain.** |
| `coo` (Level 2) | Level 3, 4, 5. Tidak bisa mengubah Level 1 atau Level 2 lain. |
| `hr_manager` (Level 3) | Level 4, 5. Tidak bisa mengubah Level 1, 2, atau 3 lain. |

**Implementasi:**
```php
// Di Action class UpdateUserRolesAction
public function execute(User $currentUser, User $targetUser, array $newRoleIds): void
{
    $currentUserLevel = $currentUser->roles()->min('hierarchy_level');
    $targetRoleLevels = Role::whereIn('id', $newRoleIds)->pluck('hierarchy_level');
    
    foreach ($targetRoleLevels as $level) {
        if ($level <= $currentUserLevel) {
            throw new UnauthorizedException(
                "Anda tidak memiliki izin untuk mengubah role dengan level yang lebih tinggi."
            );
        }
    }
    
    $targetUser->syncRoles($newRoleIds);
}
```

### 4.3 Permission-Based Rendering (UI)

- Sidebar Filament merender menu **berdasarkan permission**, bukan role.
- Gunakan `$user->can('permission_name')` atau Blade directive `@can`.
- Komponen yang terpengaruh `project_type` (misal: menu Sponsor) hanya dirender jika `project_type = promotor` **DAN** user punya permission `view:sponsors`.

### 4.4 User Eksternal Bisnis

- Role `vendor`, `sponsor`, dan `client` hanya memiliki **satu role** (tidak multiple roles).
- Mereka hanya dapat mengakses portal masing-masing (`/vendor/*`, `/sponsor/*`, `/client/*`).
- PM yang mengundang mereka (via Magic Link) hanya bisa memberikan role sesuai portal yang relevan.

### 4.5 Role Default untuk Publik

- Setiap user yang registrasi melalui halaman publik (`/register`) otomatis mendapatkan role `peserta`.
- `peserta` tidak memiliki permission bisnis apa pun selain `view:dashboard` (terbatas ke `/user/*`).

---

## 5. Implementasi: Setup Filament Shield

### 5.1 Instalasi

```bash
# 1. Install Filament Shield
composer require bezhansalleh/filament-shield

# 2. Publish config
php artisan vendor:publish --tag="filament-shield-config"

# 3. Setup Shield (migrate, generate permissions, create super admin)
php artisan shield:setup --fresh

# 4. Install untuk panel Filament
# Tambahkan ShieldPlugin ke PanelProvider:
# ->plugin(\BezhanSalleh\FilamentShield\FilamentShieldPlugin::make())
```

### 5.2 Konfigurasi Super Admin

Di `config/filament-shield.php`:
```php
'super_admin' => [
    'enabled' => true,
    'name' => 'super_admin',
    'define_via_gate' => true,
    'intercept_gate' => 'before',
],
```

Dengan konfigurasi ini, user dengan role `super_admin` akan otomatis bypass semua Gate/Permission check.

### 5.3 Generate Permission dari Filament Resources

```bash
# Generate permission untuk semua Resource, Pages, Widgets
php artisan shield:generate --all

# Generate permission untuk resource spesifik
php artisan shield:generate --resource=EventResource
```

### 5.4 Permission Key Customization

Untuk mencegah konflik permission antar resource dengan nama yang sama, gunakan prefix berbasis navigation group:

```php
// config/filament-shield.php
'permission_prefixes' => [
    'resource' => [
        'view',
        'view_any',
        'create',
        'update',
        'delete',
        'delete_any',
    ],
],

// Custom permission key composition
'build_permission_key_using' => function ($entity) {
    return $entity->getNavigationGroup() . ':' . $entity->getResourceName();
},
```

### 5.5 Custom Permissions (Non-Filament)

Untuk permission yang tidak terkait dengan Filament Resource (seperti `manage:finance:refunds`), daftarkan di:
```php
// config/filament-shield.php
'entities' => [
    'custom_permissions' => [
        'manage:finance:refunds',
        'manage:finance:coa',
        'manage:commissions',
        // ... semua 44 permission kustom
    ],
],
```

---

## 6. Implementasi: Tiga Lapis Keamanan

### 6.1 Middleware

Di `routes/admin.php`:
```php
Route::middleware(['auth', 'can:view:dashboard'])->group(function () {
    Route::get('/dashboard/events', [EventController::class, 'index'])
        ->middleware('can:create:event');
});
```

### 6.2 Policies (Auto-generated oleh Shield)

Filament Shield akan meng-generate Policy untuk setiap Resource. Contoh untuk EventResource:
```php
class EventPolicy
{
    public function viewAny(User $user): bool
    {
        return $user->can('view_any_event');
    }
    
    public function create(User $user): bool
    {
        return $user->can('create:event');
    }
    
    // ... method lainnya di-generate otomatis
}
```

### 6.3 Action/Services Layer

Semua Action class melakukan verifikasi di awal eksekusi:
```php
class CreateEventAction
{
    public function execute(User $user, CreateEventDTO $dto): Event
    {
        if (!$user->can('create:event')) {
            throw new UnauthorizedException('Anda tidak memiliki izin membuat event.');
        }
        
        // Logic create event...
    }
}
```

---

## 7. Seeder RBAC

### 7.1 Seeder Role & Permission

Semua role dan permission di-seed melalui `RolesAndPermissionsSeeder`:
```bash
php artisan db:seed --class=RolesAndPermissionsSeeder
```

Seeder akan:
1. Membuat semua 44 permission.
2. Membuat 14 role dengan permission sesuai matriks Pasal 3.
3. Membuat user Super Admin awal: `admin@naraevent.id`.
4. Meng-assign role `super_admin` ke user tersebut.

### 7.2 Seeder untuk Sandbox Mode

Di Sandbox Mode, seeder akan membuat beberapa user dummy dengan role berbeda untuk keperluan latihan.

---

## 8. Aturan Tambahan

### 8.1 Permission Caching

- Spatie secara default meng-cache permission untuk performa.
- Cache otomatis di-reset saat role atau permission berubah.
- Jangan pernah memodifikasi tabel `roles`, `permissions`, atau pivot secara manual — selalu gunakan API Spatie.

### 8.2 Multi-Guard

Nara ERP menggunakan single guard (`web`) untuk semua user (internal, eksternal, publik). Jika di masa depan diperlukan guard terpisah (misal `api`), konfigurasi di `config/permission.php`.

---

> **Akhir Dokumen**
>
> _Versi 1.0.0 — Laravel 13 Implementation. Ditinjau terakhir: 2026-05-07._
> _Dokumen ini adalah kontrak implementasi RBAC untuk Nara ERP. Setiap perubahan permission atau role harus diperbarui di sini._

> END OF DOCUMENT - `TECH_02_RBAC.md`