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
  )
};

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
