import React from "react";
import { useParams } from "react-router-dom";

function Content() {
  const { topic } = useParams();
  const decodedTopic = decodeURIComponent(topic || "Unknown Topic");

  // Notes data (You can expand this for other topics)
  const notes = {
    "Introduction to Linux": (
      <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Everyday Examples of Linux</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Airplanes, Smart TVs, Google-based systems</li>
          <li>Websites & Servers</li>
          <li>Smartphones, ATMs, Tablets</li>
          <li>Windows Data Recovery tools</li>
          <li>Applications, Self-driving cars</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600">What is an Operating System?</h2>
        <p className="text-gray-700">
          An OS acts as a bridge between computer hardware and the user. It manages resources and provides
          an interface (CLI/GUI) to interact with the system.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">Types of Operating Systems</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li><strong>Desktop OS:</strong> Windows, macOS, Linux (Ubuntu, Fedora, etc.)</li>
          <li><strong>Server OS:</strong> Windows Server, Linux Server</li>
          <li><strong>Mobile OS:</strong> Android, iOS, Windows Mobile</li>
          <li><strong>Embedded OS:</strong> Routers, Smart TVs, Automobiles, Home Appliances</li>
          <li><strong>Real-Time OS (RTOS):</strong> Aerospace, Medical equipment, Defense systems</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-600">What is Linux?</h2>
        <p className="text-gray-700">
          Linux is a <strong>free and open-source operating system</strong>. 
          Being open-source means anyone can view, modify, and redistribute the code.
          It is known for its stability, security, and flexibility.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600">Why is Linux Important?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Widely used in servers & cloud computing</li>
          <li>Free and open-source</li>
          <li>Powerful command-line interface</li>
          <li>Faster processing</li>
          <li>Enhanced security</li>
          <li>Highly customizable</li>
        </ul>
      </div>
    ),
    "Linux vs Unix": (
      <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Linux vs Unix</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Linux Section */}
          <div>
            <h3 className="text-xl font-bold text-green-600">Linux</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Completely free to use and distribute</li>
              <li>Fully open-source with accessible and modifiable code</li>
              <li>Developed collaboratively by a global community and major companies (e.g., Red Hat, CentOS, Debian)</li>
              <li>Highly compatible, supporting a wide variety of hardware platforms</li>
            </ul>
          </div>

          {/* Unix Section */}
          <div>
            <h3 className="text-xl font-bold text-red-600">Unix</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Requires payment as a commercial operating system</li>
              <li>Proprietary with restricted access to source code</li>
              <li>Utilized by specific vendors such as Solaris, HP-UX, and AIX</li>
              <li>Limited compatibility, supporting only a select few file systems</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-blue-600">Different Flavours / Distributions of Linux</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Ubuntu - User-friendly and widely used</li>
          <li>Fedora - Cutting-edge and community-driven</li>
          <li>Debian - Stable and highly customizable</li>
          <li>RedHat Enterprise Linux (RHEL) - Enterprise-grade solution</li>
          <li>CentOS - Reliable and recommended for stability</li>
          <li>Arch Linux - For advanced users seeking full control</li>
          <li>openSUSE - Versatile with strong development tools</li>
          <li>Linux Mint - Easy-to-use with a polished interface</li>
          <li>Gentoo - Highly optimized for performance</li>
          <li>Slackware - Traditional and lightweight</li>
          <li>Alpine Linux - Lightweight and security-focused</li>
          <li>Kali Linux - Specialized for security and penetration testing</li>
        </ul>
      </div>
    ),
    "Linux vs Windows": (
           <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Linux vs Windows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Linux Section */}
          <div>
            <h3 className="text-xl font-bold text-green-600">Linux</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Completely free to use and distribute</li>
              <li>Fully open-source with customizable code</li>
              <li>Developed collaboratively by a global community and companies (e.g., Red Hat, Canonical)</li>
              <li>Highly versatile, supporting a wide range of hardware platforms</li>
              <li>May perform slowly on poorly optimized or unmanaged systems</li>
              <li>Utilizes robust package managers (e.g., APT, Yum) for software installation</li>
              <li>Requires a learning curve for new users</li>
              <li>Offers exceptional stability and performance for servers and development</li>
            </ul>
          </div>

          {/* Windows Section */}
          <div>
            <h3 className="text-xl font-bold text-red-600">Windows</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Proprietary software owned by Microsoft</li>
              <li>Requires payment for licensing and updates</li>
              <li>Features a user-friendly standard graphical user interface (GUI)</li>
              <li>Includes a Start menu and power options for easy navigation</li>
              <li>Limited flexibility for advanced customization or play</li>
              <li>Python not pre-installed; requires manual setup (e.g., executable installer)</li>
              <li>Limited user control over system processes and configurations</li>
              <li>Stable but may experience performance degradation over time</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    "Linux Installation":(
      <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Linux Installation</h1>

      {/* Pre-requisites */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Pre-requisites</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Ensure system meets hardware requirements (RAM, CPU, disk space).</li>
          <li>Backup important data before installation.</li>
          <li>Download the Linux distribution ISO (Ubuntu, Fedora, Debian, etc.).</li>
          <li>Create a bootable USB/DVD using <b>Rufus</b>, <b>Etcher</b>, or the <code>dd</code> command.</li>
        </ul>
      </section>

      {/* Boot Process */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Boot Process</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Insert the bootable media and restart the computer.</li>
          <li>Enter <b>BIOS/UEFI</b> (press <code>F2</code>, <code>F10</code>, or <code>Del</code>).</li>
          <li>Change boot order to prioritize USB/DVD.</li>
          <li>Save and reboot → system loads the Linux installer.</li>
        </ul>
      </section>

      {/* Installation Steps */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Installation Steps</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Choose <b>language</b> and <b>keyboard layout</b>.</li>
          <li>Select <b>Try Linux</b> (live mode) or <b>Install Linux</b>.</li>
          <li>Decide <b>Installation type</b>:
            <ul className="list-disc list-inside ml-6">
              <li>Dual-boot with another OS</li>
              <li>Erase disk and install Linux</li>
              <li>Manual partitioning (custom setup)</li>
            </ul>
          </li>
          <li>Create partitions:
            <ul className="list-disc list-inside ml-6">
              <li><code>/</code> (root) → main system</li>
              <li><code>/home</code> → personal files</li>
              <li><code>swap</code> → virtual memory</li>
              <li><code>/boot</code> (optional)</li>
            </ul>
          </li>
          <li>Provide <b>username, password, hostname</b>.</li>
          <li>Begin installation → system copies files and installs <b>GRUB bootloader</b>.</li>
        </ul>
      </section>

      {/* Post Installation */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Post Installation</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Remove USB/DVD and reboot.</li>
          <li>Login with created credentials.</li>
          <li>Run updates:
            <pre className="bg-gray-900 text-green-400 p-2 rounded mt-2">
{`sudo apt update && sudo apt upgrade   # Debian/Ubuntu
sudo dnf update                       # Fedora
sudo pacman -Syu                      # Arch`}
            </pre>
          </li>
          <li>Install essential software (browser, text editor, compilers).</li>
          <li>Set up drivers (Wi-Fi, graphics).</li>
        </ul>
      </section>

      <p className="mt-4 text-gray-700">
        ⚡ <b>Final Note:</b> Beginners can use the <b>guided installation</b>, while advanced
        users may configure <b>custom partitions</b> for better system management.
      </p>
    </div>
  ),
  "Important Things to Remember in Linux":(
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📌 Important Things to Remember in Linux</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Superuser (Root Account)</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Linux has a superuser/root account with full administrative privileges.</li>
          <li>Root can create, modify, and delete files system-wide.</li>
          <li>Be careful while using root as mistakes can damage the system.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">2. File & Directory System</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Linux follows a hierarchical directory structure.</li>
          <li>Case-sensitive → <code>ABC.txt</code> and <code>abc.txt</code> are different.</li>
          <li>Avoid spaces in filenames. Use <code>-</code> or <code>_</code> instead.</li>
          <li>
            Important directories:
            <ul className="list-disc list-inside ml-6">
              <li><code>/home</code> → User files</li>
              <li><code>/etc</code> → Configuration files</li>
              <li><code>/var</code> → Logs & variable data</li>
              <li><code>/bin</code>, <code>/sbin</code>, <code>/usr/bin</code> → Executables</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">3. Commands</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Linux commands are case-sensitive.</li>
          <li>Commands may require options/arguments. Example:</li>
        </ul>
        <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
          <code>ls -l /home</code>
        </pre>
        <p className="mt-2">Basic commands: <code>pwd</code>, <code>ls</code>, <code>cd</code>, <code>cp</code>, <code>mv</code>, <code>rm</code>, <code>cat</code>, <code>chmod</code>, <code>chown</code></p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">4. Access Types</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Console Access → Local terminal on the machine.</li>
          <li>Remote Access → Connect via SSH or PuTTY.</li>
        </ul>
      </section>


      <section>
        <h2 className="text-xl font-semibold">6. Flexibility</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Linux is open source, flexible, and secure.</li>
          <li>Supports multiple hardware platforms.</li>
          <li>Highly customizable (kernel, shell, packages, services).</li>
        </ul>
      </section>
    </div>
  ),
  "Putty":(
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📌 Using PuTTY & SSH in Linux</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">1. Using PuTTY (Windows → Linux)</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Open PuTTY on Windows.</li>
          <li>Enter the <strong>IP address</strong> of the Linux server.</li>
          <li>Select connection type: <code>SSH</code> (default port: <code>22</code>).</li>
          <li>Click <strong>Open</strong> to start the session.</li>
          <li>When prompted:
            <ul className="list-disc list-inside ml-6">
              <li>Enter <strong>username</strong></li>
              <li>Enter <strong>password</strong></li>
            </ul>
          </li>
          <li>Once logged in → you can run Linux commands remotely.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">2. Using SSH (Command Line)</h2>
        <ul className="list-disc list-inside ml-4">
          <li>From a Linux terminal or Windows PowerShell, run:</li>
        </ul>
        <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
          <code>ssh username@IP_Address</code>
        </pre>
        <p className="mt-2">Example:</p>
        <pre className="bg-gray-800 text-white p-3 rounded-md mt-2">
          <code>ssh -l user 192.168.1.10</code>
        </pre>
        <p className="mt-2">After entering password → you will be logged into the remote server.</p>
      </section>
    </div>
  ),
  "What is root": (
  <div className="text-left space-y-4">
    <h2 className="text-2xl font-semibold text-blue-600">What is Root?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Root Account */}
      <div>
        <h3 className="text-xl font-bold text-green-600">Root Account</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Superuser account in Linux</li>
          <li>Has full administrative privileges</li>
          <li>Can manage users, processes, and system files</li>
        </ul>
      </div>

      {/* Root Directory */}
      <div>
        <h3 className="text-xl font-bold text-purple-600">Root Directory (/)</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Top-level directory in Linux filesystem hierarchy</li>
          <li>All other files and directories branch out from here</li>
          <li>Represented by <code>/</code></li>
        </ul>
      </div>

      {/* Root Home Directory */}
      <div>
        <h3 className="text-xl font-bold text-red-600">Root Home Directory (/root)</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Personal home directory of the root user</li>
          <li>Separate from regular user home directories (/home/username)</li>
          <li>Used for root-specific files and configurations</li>
        </ul>
      </div>
    </div>
  </div>
),
"Introduction to File System": (
  <div className="text-left space-y-4">
    <h2 className="text-2xl font-semibold text-blue-600">Introduction to File System</h2>
    <p className="text-gray-700">
      A file system is a system used by an operating system to manage files. 
      It controls how data is stored and retrieved.
    </p>

    {/* Example */}
    <div>
      <h3 className="text-xl font-bold text-green-600">Examples</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>System config → folder A</li>
        <li>User files → folder B</li>
        <li>Log files → folder C</li>
        <li>Commands/Scripts → folder D</li>
      </ul>
    </div>

    {/* Types */}
    <div>
      <h3 className="text-xl font-bold text-purple-600">Types of File Systems</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li>ext3, ext4 → Linux</li>
        <li>NTFS, FAT → Windows</li>
      </ul>
    </div>

    {/* Commands */}
    <div>
      <h3 className="text-xl font-bold text-red-600">Basic Commands</h3>
      <ul className="list-disc list-inside text-gray-700">
        <li><code>cd</code> → Root directory</li>
        <li><code>ls -l</code> → List directories in root</li>
      </ul>
    </div>

    {/* File System Structure */}
    <div>
      <h3 className="text-xl font-bold text-indigo-600">File System Structure</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li><code>/boot</code> → Boot files</li>
        <li><code>/root</code> → Root home directory</li>
        <li><code>/dev</code> → System devices</li>
        <li><code>/etc</code> → Configuration files</li>
        <li><code>/bin</code> → Commands (ls, pwd)</li>
        <li><code>/sbin</code> → System commands</li>
        <li><code>/opt</code> → Optional add-ons</li>
        <li><code>/proc</code> → Process-related files</li>
        <li><code>/lib</code> → Library files</li>
        <li><code>/tmp</code> → Temporary files</li>
        <li><code>/home</code> → User directories</li>
        <li><code>/var</code> → System logs</li>
        <li><code>/usr</code> → User applications</li>
        <li><code>/mnt</code> → Mount points</li>
        <li><code>/media</code> → External media</li>
      </ul>
    </div>
  </div>
),
"Navigation File System":(
  <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Navigate to File System</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Commands Section */}
          <div>
            <h3 className="text-xl font-bold text-green-600">Commands</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>cd (Change directory) - Navigate to a different directory</li>
              <li>pwd (Print working directory) - Display the current directory path</li>
              <li>ls (Listing) - List files and directories (equivalent to 'dir' on Windows)</li>
              <li>cd .. - Move up one directory level</li>
              <li>cd - - Return to the previous directory</li>
              <li>cd / - Navigate to the root directory</li>
              <li>cd ~ - Go to the home directory</li>
            </ul>
          </div>

          {/* Properties Section */}
          <div>
            <h3 className="text-xl font-bold text-red-600">Directory Properties</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Type - Specifies the type of file or directory</li>
              <li># of files owner group - Indicates the number of files and ownership group</li>
              <li>drwxr-xr-x - File permissions (read, write, execute for owner, group, and others)</li>
              <li>rw - Read and write permissions</li>
              <li>-rwx - Read, write, and execute permissions</li>
            </ul>
          </div>
        </div>
      </div>
),
 "File System Paths":(
      <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">File System Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Absolute Paths Section */}
          <div>
            <h3 className="text-xl font-bold text-green-600">Absolute Paths</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>/ (Root directory)</li>
              <li>/var/log/samba (Path to Samba log files)</li>
            </ul>
          </div>

          {/* Relative Paths Section */}
          <div>
            <h3 className="text-xl font-bold text-red-600">Relative Paths</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>./ (Current directory)</li>
              <li>../ (Parent directory)</li>
              <li>log (Relative path to a log file)</li>
              <li>samba (Relative path to a samba directory)</li>
            </ul>
          </div>
        </div>
      </div>
 ),
 "Creating Files and Directories":(
   <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Creating Files and Directories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Creating Files Section */}
          <div>
            <h3 className="text-xl font-bold text-green-600">Creating Files</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>vi - Open a file in vi editor to create or edit</li>
              <li>touch - Create an empty file or update the timestamp of an existing file</li>
              <li>touch children7 children7 filename - Create multiple files with specific names</li>
            </ul>
          </div>

          {/* Creating Directories Section */}
          <div>
            <h3 className="text-xl font-bold text-red-600">Creating Directories</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>mkdir - Create a single directory</li>
              <li>mkdir foldername - Create a directory with a specific name</li>
              <li>mkdir - Create more than one folder at a time (with multiple names)</li>
            </ul>
          </div>
        </div>
      </div>
 ),
 "Copying the Directories":(
  <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Copying the Directories (-R=Recursive)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Command Usage Section */}
          <div>
            <h3 className="text-xl font-bold text-green-600">Command Usage</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>To copy a directory on Linux, use the <code>cp</code> command with the <code>-r</code> option for recursive copying</li>
              <li>Recursive and specify the source and destination directories to be copied</li>
              <li><code>cp -r source_folder destination_folder</code> - Copy a folder recursively</li>
            </ul>
          </div>

          {/* Examples and Notes Section */}
          <div>
            <h3 className="text-xl font-bold text-red-600">Examples and Notes</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Create a directory with <code>mkdir config</code></li>
              <li>Create files with <code>touch a.config b.config c.config</code></li>
              <li><code>cp -r config /tmp/config_backup</code> - Copy config directory to /tmp/config_backup</li>
              <li>For a specific test, we are copying directory (not file)</li>
              <li>Under temp folder, we have created (e.g., test folder)</li>
            </ul>
          </div>
        </div>
      </div>
 ),
 "Finding Files and Directories":(
 <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Finding Files and Directories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Commands Section */}
          <div>
            <h3 className="text-xl font-bold text-green-600">Commands</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>locate - Search for files and directories by name</li>
              <li>find - Search for files and directories with detailed criteria (e.g., name, type, size)</li>
            </ul>
          </div>

          {/* Notes Section */}
          <div>
            <h3 className="text-xl font-bold text-red-600">Notes</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li><code>locate</code> provides the full path where the filename is located</li>
              <li><code>find</code> allows searching with options like <code>-name</code> or <code>-type</code></li>
              <li>Root has permission to access all files (e.g., using <code>su</code> or <code>sudo</code> with password)</li>
              <li>Avoid using <code>su -</code> to prevent potential issues</li>
            </ul>
          </div>
        </div>
      </div>
 ),
 "Difference between Find and Locate":(
  <div className="text-left space-y-4">
        <h2 className="text-2xl font-semibold text-blue-600">Difference Between find and locate</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* find Section */}
          <div>
            <h3 className="text-xl font-bold text-green-600">find</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Searches the filesystem in real-time for files and directories based on specified criteria (e.g., name, size, type)</li>
              <li>Requires root permissions for some directories but can be used with <code>sudo</code></li>
              <li>More flexible and precise, allowing complex searches (e.g., <code>find / -name "*.txt"</code>)</li>
              <li>Slower as it scans the entire filesystem or specified paths</li>
            </ul>
          </div>

          {/* locate Section */}
          <div>
            <h3 className="text-xl font-bold text-red-600">locate</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Searches a pre-built database of filesystem contents for files and directories by name</li>
              <li>Faster than <code>find</code> since it uses an indexed database updated periodically (e.g., via <code>updatedb</code>)</li>
              <li>Less flexible, limited to name-based searches (e.g., <code>locate filename</code>)</li>
              <li>May not reflect recent changes until the database is updated</li>
            </ul>
          </div>
        </div>
      </div>
    
 ),
 
 "Wildcards":(
   <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-200 mx-auto max-w-4xl font-sans text-gray-800">
      <header>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center border-b-4 border-blue-500 pb-4 mb-8">
          Linux Wildcards
        </h1>
      </header>

      <section className="introduction">
        <p className="italic text-gray-600 text-center text-lg mb-8">
          A wildcard is a character that can be used as a substitute for any character or a class of characters in a search. They are a powerful tool in Linux for managing files and directories efficiently.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-green-600 border-l-4 border-green-600 pl-4 mt-10 mb-6">
          Basic Wildcards
        </h2>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 mt-6">
          <h3 className="text-red-500 font-mono text-2xl font-bold bg-red-50 px-3 py-1 rounded-md inline-block mb-2">
            * (Asterisk)
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            Matches zero or more characters.
          </p>
          <ul className="list-none pl-0 mt-5">
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">touch abcd{'1..9'}xyz</span>: Creates 9 files, from `abcd1xyz` to `abcd9xyz`.
            </li>
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">touch abcd-xyz</span>: Creates a single file named `abcd-xyz`.
            </li>
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">touch abcd9-xyz</span>: Creates a single file named `abcd9-xyz`.
            </li>
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">ls abcd*</span>: Lists all files that start with "abcd".
            </li>
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">rm abcd*</span>: Removes all files that start with "abcd".
            </li>
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">rm *xyz</span>: Removes all files that end with "xyz".
            </li>
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">ls d*bcd*</span>: Lists all files that start with "d" and end with "bcd".
            </li>
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">ls d*[cd]*</span>: Lists files that start with "d", contain 'c' or 'd', followed by anything.
            </li>
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">rm *xy*</span>: Deletes all files that have "xy" in their name.
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 mt-6">
          <h3 className="text-red-500 font-mono text-2xl font-bold bg-red-50 px-3 py-1 rounded-md inline-block mb-2">
            ? (Question Mark)
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            Matches a single character.
          </p>
          <ul className="list-none pl-0 mt-5">
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">ls file?.txt</span>: Lists files like `file1.txt`, `file2.txt`, but not `file10.txt`.
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 mt-6">
          <h3 className="text-red-500 font-mono text-2xl font-bold bg-red-50 px-3 py-1 rounded-md inline-block mb-2">
            [] (Square Brackets)
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            Matches a range of characters or a set of specific characters.
          </p>
          <ul className="list-none pl-0 mt-5">
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">ls [a-d]*.txt</span>: Lists files starting with 'a', 'b', 'c', or 'd'.
            </li>
            <li className="mb-3 border-l-4 border-purple-500 pl-4 bg-purple-50 py-2 rounded-sm">
              <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium whitespace-pre-wrap">ls [abc]*.txt</span>: Lists files starting with 'a', 'b', or 'c'.
            </li>
          </ul>
        </div>
      </section>
    </div>
 ),
 "Linux File types":(
 <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-200 mx-auto max-w-4xl font-sans text-gray-800">
      <header>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center border-b-4 border-blue-500 pb-4 mb-8">
          Linux File Types
        </h1>
      </header>

      <section>
        <p className="italic text-gray-600 text-center text-lg mb-8">
          In Linux, everything is considered a file, and the type of file is indicated by a single character at the beginning of a long listing (`ls -l`).
        </p>

        <table className="w-full border-collapse mt-5">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="bg-gray-100 text-gray-900 text-left py-3 md:py-4 px-2 md:px-4 border-b-2 border-gray-300 rounded-tl-lg">Character</th>
              <th className="bg-gray-100 text-gray-900 text-left py-3 md:py-4 px-2 md:px-4 border-b-2 border-gray-300">Type of File</th>
              <th className="bg-gray-100 text-gray-900 text-left py-3 md:py-4 px-2 md:px-4 border-b-2 border-gray-300 rounded-tr-lg">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 md:py-4 px-2 md:px-4 align-top font-mono font-bold text-lg text-center bg-blue-50 text-blue-600">
                -
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4 align-top">
                Regular File
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4">
                This is an ordinary file that contains data, such as a text document, image, or executable program.
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 md:py-4 px-2 md:px-4 align-top font-mono font-bold text-lg text-center bg-blue-50 text-blue-600">
                d
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4 align-top">
                Directory
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4">
                A folder that holds other files and directories, organizing the file system in a hierarchical structure.
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 md:py-4 px-2 md:px-4 align-top font-mono font-bold text-lg text-center bg-blue-50 text-blue-600">
                l
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4 align-top">
                Link
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4">
                Also known as a "symbolic link" or "symlink," this is a pointer or shortcut to another file or directory.
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 md:py-4 px-2 md:px-4 align-top font-mono font-bold text-lg text-center bg-blue-50 text-blue-600">
                c
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4 align-top">
                Character Special File
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4">
                Represents a device that handles data character by character, such as a terminal, keyboard, or serial port.
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 md:py-4 px-2 md:px-4 align-top font-mono font-bold text-lg text-center bg-blue-50 text-blue-600">
                b
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4 align-top">
                Block Special File
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4">
                Represents a device that handles data in blocks, like a hard drive, solid-state drive (SSD), or USB drive.
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 md:py-4 px-2 md:px-4 align-top font-mono font-bold text-lg text-center bg-blue-50 text-blue-600">
                p
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4 align-top">
                Named Pipe
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4">
                A special file used for inter-process communication (IPC) where data is read and written in a "first-in, first-out" (FIFO) manner.
              </td>
            </tr>
            <tr className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 md:py-4 px-2 md:px-4 align-top font-mono font-bold text-lg text-center bg-blue-50 text-blue-600">
                s
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4 align-top">
                Socket
              </td>
              <td className="py-3 md:py-4 px-2 md:px-4">
                A special file used for inter-process communication (IPC) that allows processes to communicate over a network or within the same machine.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-green-600 border-l-4 border-green-600 pl-4 mt-10 mb-4">
          How to check a file's type
        </h2>
        <p className="text-gray-700 text-lg">
          You can see the file type by using the <span className="font-mono bg-gray-200 text-gray-800 px-2 py-1 rounded-md text-sm font-medium">ls -l</span> command in your terminal. The first character of the output for each file or directory indicates its type.
        </p>
        <div className="font-mono bg-gray-200 text-gray-800 px-4 py-3 rounded-lg mt-4 overflow-auto">
          <pre>ls -l /dev/</pre>
        </div>
      </section>
    </div>
  ),
  "Types of Links":(
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-gray-200 mx-auto max-w-4xl font-sans text-gray-800">
  <header>
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center border-b-4 border-blue-500 pb-4 mb-8">
      Linux Links: Soft Links and Hard Links
    </h1>
  </header>

  <section>
    <p className="italic text-gray-600 text-center text-lg mb-8">
      In Linux, a link is a pointer to a file. There are two primary types of links, and understanding them requires first knowing about the **Inode**.
    </p>
    <p className="text-gray-700 text-lg mb-8">
      An <span className="font-bold text-gray-900">Inode</span> is a data structure on the disk that stores all the information about a file, except for its name. This includes the file's content location on the disk, permissions, and owner. When you create a file, the system assigns it a unique inode number. The filename is simply a human-readable label that points to this inode.
    </p>

    <table className="w-full border-collapse mt-5">
      <thead>
        <tr className="border-b border-gray-300">
          <th className="bg-gray-100 text-gray-900 text-left py-3 md:py-4 px-2 md:px-4 border-b-2 border-gray-300 rounded-tl-lg">Feature</th>
          <th className="bg-gray-100 text-gray-900 text-left py-3 md:py-4 px-2 md:px-4 border-b-2 border-gray-300">Soft Link (Symbolic Link)</th>
          <th className="bg-gray-100 text-gray-900 text-left py-3 md:py-4 px-2 md:px-4 border-b-2 border-gray-300 rounded-tr-lg">Hard Link</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td className="py-3 md:py-4 px-2 md:px-4 align-top font-bold bg-blue-50 text-blue-600">
            Definition
          </td>
          <td className="py-3 md:py-4 px-2 md:px-4 align-top">
            A pointer to the file's path name.
          </td>
          <td className="py-3 md:py-4 px-2 md:px-4 align-top">
            A pointer to the file's inode.
          </td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td className="py-3 md:py-4 px-2 md:px-4 align-top font-bold bg-blue-50 text-blue-600">
            Inode
          </td>
          <td className="py-3 md:py-4 px-2 md:px-4 align-top">
            Has its own unique inode number.
          </td>
          <td className="py-3 md:py-4 px-2 md:px-4 align-top">
            Shares the same inode number as the original file.
          </td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td className="py-3 md:py-4 px-2 md:px-4 align-top font-bold bg-blue-50 text-blue-600">
            Effect of Deleting Original File
          </td>
          <td className="py-3 md:py-4 px-2 md:px-4 align-top">
            The soft link will break and become a "dangling link".
          </td>
          <td className="py-3 md:py-4 px-2 md:px-4 align-top">
            The hard link is unaffected; the file content remains as long as at least one hard link exists.
          </td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td className="py-3 md:py-4 px-2 md:px-4 align-top font-bold bg-blue-50 text-blue-600">
            Cross-Filesystem
          </td>
          <td className="py-3 md:py-4 px-2 md:px-4 align-top">
            Can link to files on different partitions.
          </td>
          <td className="py-3 md:py-4 px-2 md:px-4 align-top">
            Cannot link to files on different partitions.
          </td>
        </tr>
        <tr className="border-b border-gray-200 hover:bg-gray-50">
          <td className="py-3 md:py-4 px-2 md:px-4 align-top font-bold bg-blue-50 text-blue-600">
            Directory Linking
          </td>
          <td className="py-3 md:py-4 px-2 md:px-4 align-top">
            Can be created for directories.
          </td>
          <td className="py-3 md:py-4 px-2 md:px-4 align-top">
            Cannot be created for directories.
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  
</div>
  ),

}

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">{decodedTopic}</h1>
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-6">
        {notes[decodedTopic] || (
          <p className="text-lg text-gray-500 animate-pulse">🚧 Content Coming Soon...</p>
        )}
      </div>
    </div>
  );
}

export default Content;
